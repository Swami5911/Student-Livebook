import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, User, Maximize2, Minimize2, Columns } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../../styles/AITutor.css';
import { streamTutorResponse } from '../../utils/openRouterService';
import type { ChatMessage } from '../../utils/openRouterService';

interface AITutorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  uid: string;
  contextData: any;
}

export const AITutorWindow: React.FC<AITutorWindowProps> = ({ isOpen, onClose, contextData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [windowSize, setWindowSize] = useState<'small' | 'medium' | 'full'>('small');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load Initial Greeting
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
        setMessages([{
            role: 'assistant',
            content: `Hi there! I'm your AI Tutor. ${contextData.lectureTitle ? `I see you're studying **${contextData.lectureTitle}**.` : 'How can I help you today?'}`
        }]);
    }
  }, [isOpen, contextData.lectureTitle]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Initial silent assistant message that we will stream text into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    await streamTutorResponse(
        newMessages.filter(m => m.content !== ''), 
        contextData,
        (incrementalText) => {
             setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].content = incrementalText;
                return updated;
             });
        },
        () => setIsTyping(false),
        (error) => {
             setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1].content = `*Error connecting to AI Tutor: ${error}*`;
                return updated;
             });
             setIsTyping(false);
        }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`ai-tutor-window size-${windowSize}`}>
      <div className="tutor-header">
        <div className="tutor-info">
          <div className="tutor-avatar"><Bot size={20} /></div>
          <div>
            <h3>AI Tutor</h3>
            <span className="tutor-status">{contextData.lectureTitle ? `Context: ${contextData.lectureTitle}` : 'General Assistance'}</span>
          </div>
        </div>
        <div className="window-controls">
          <button 
             className={`resize-btn ${windowSize === 'small' ? 'active' : ''}`} 
             onClick={() => setWindowSize('small')}
             title="One-Third Screen (Default)"
          >
             <Minimize2 size={16} />
          </button>
          <button 
             className={`resize-btn ${windowSize === 'medium' ? 'active' : ''}`} 
             onClick={() => setWindowSize('medium')}
             title="Two-Thirds Screen"
          >
             <Columns size={16} />
          </button>
          <button 
             className={`resize-btn ${windowSize === 'full' ? 'active' : ''}`} 
             onClick={() => setWindowSize('full')}
             title="Full Screen"
          >
             <Maximize2 size={16} />
          </button>
          <div className="divider" />
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
      </div>

      <div className="tutor-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message-wrapper ${msg.role}`}>
            <div className="message-avatar">
              {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className="message-bubble">
              {msg.role === 'assistant' ? (
                 <div className="markdown-body">
                   {msg.content ? (
                     <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                   ) : (
                     <div className="typing-indicator" style={{ display: 'inline-block', height: '1.2em' }}>
                       <span>.</span><span>.</span><span>.</span>
                     </div>
                   )}
                 </div>
              ) : (
                 msg.content
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="tutor-input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about this lecture..."
          rows={1}
          disabled={isTyping}
        />
        <button className="send-btn" onClick={handleSend} disabled={!input.trim() || isTyping}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};
