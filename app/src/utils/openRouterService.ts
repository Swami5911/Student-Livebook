import type { Lecture } from "../types";
import { lectureToRawText } from "./LectureParser";

// Use environment variables for API key
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = "liquid/lfm-2-24b-a2b"; // Using the user's alternative to prevent "Thinking Process" leakage

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export const streamTutorResponse = async (
  messages: ChatMessage[],
  contextData: { 
      streamName?: string; 
      lectureTitle?: string; 
      lecture?: Lecture 
  },
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: string) => void
) => {
  try {
    let systemPrompt = "You are a helpful AI Tutor from 'SKD - Student Livebook' created to help students understand difficult problems and learn new things. Your goal is to explain concepts clearly based on the material, tailored to the student's level of knowledge. Always provide relatable, real-world examples to aid their understanding. IMPORTANT RULES: 1. NEVER reveal your underlying AI model, API, LLM architecture, or developer (e.g., OpenAI, Google, Liquid, Qwen). If asked who you are or what model you use, strictly reply: 'I am just an AI tutor from SKD - Student Livebook here to help you understand difficult problems and learn new things.' 2. DO NOT show any internal thinking process, analysis, or rationales. NEVER print 'Thinking Process:'. 3. FORMATTING: Use strict, beautiful Markdown. Use bullet points (-) for lists. For tables, ALWAYS insert a true newline after the header row and after every data row. Do not put an entire table on a single line. Use **bold** for emphasis. Keep your answers concise, structured, and easy to scan visually.";

    if (contextData.streamName && contextData.lectureTitle) {
      systemPrompt += `\nThe student is currently studying the course "${contextData.streamName}" and is viewing the lecture titled "${contextData.lectureTitle}".`;
    }

    if (contextData.lecture) {
      const lectureContent = lectureToRawText(contextData.lecture);
      systemPrompt += `\n\nHere is the exact lecture material they are looking at. Use this as your primary source of truth:\n\`\`\`\n${lectureContent}\n\`\`\``;
    }

    const payloadMessages = [
      { role: "system", content: systemPrompt },
      ...messages
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin, 
        "X-Title": "Student-Livebook AI Tutor", 
      },
      body: JSON.stringify({
        model: MODEL,
        messages: payloadMessages,
        stream: true, // Enable streaming
        temperature: 0.7,
        max_tokens: 1000, // Explicitly limit token reservation to avoid credit errors
      }),
    });

    if (!response.ok) {
        let errorMsg = `API Error: ${response.status} ${response.statusText}`;
        try {
            const errorJson = await response.json();
            if (errorJson.error && errorJson.error.message) {
                // OpenRouter returns "User not found" when the API key is not recognized/unfunded
                if (errorJson.error.message.includes("User not found") || response.status === 401) {
                     errorMsg = "Invalid or Missing API Key. Please add VITE_OPENROUTER_API_KEY to your app/.env file.";
                } else if (response.status === 429) {
                     errorMsg = "API Quota Exceeded (429). Too many requests or the selected model is out of free tier credits. Switching to Gemini Flash might help.";
                } else {
                     errorMsg = errorJson.error.message;
                }
            } else if (response.status === 401 || response.status === 403) {
                errorMsg = "Authentication failed. Please check your OpenRouter API Key in the .env file.";
            }
        } catch(e) {}
        throw new Error(errorMsg);
    }

    if (!response.body) throw new Error("ReadableStream not yet supported in this browser.");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let accumulatedText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.trim() === '') continue;
        if (line.trim() === 'data: [DONE]') continue;
        
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
              const textChunk = data.choices[0].delta.content;
              accumulatedText += textChunk;
              onChunk(accumulatedText); 
            }
          } catch (e) {
            console.warn("Could not parse JSON stream chunk:", line);
          }
        }
      }
    }

    onComplete();

  } catch (error: any) {
    console.error("OpenRouter Streaming Error:", error);
    onError(error.message || "Failed to connect to the AI Tutor.");
  }
};
