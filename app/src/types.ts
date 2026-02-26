export type UserRole = 'student' | 'teacher' | 'admin';

export type ContentBlockType = 
  | 'text' 
  | 'image' 
  | 'quiz' 
  | 'teacher-note' // Hidden for students
  | 'concept' 
  | 'example' 
  | 'ai-connection' 
  | 'diagram'
  | 'list';

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  content: string; // Markdown supported
  title?: string;
  items?: string[]; // For list blocks
  metadata?: any; // For flexible extensions (e.g., quiz answers, image captions)
}

export interface Section {
  id: string;
  title: string;
  blocks?: ContentBlock[];
}

export interface Lecture {
  id: string;
  lectureNumber: number;
  title: string;
  objectives?: string[];
  sections?: Section[];
  quizLink?: string; // Optional link for quiz
  pptLink?: string; // Optional link for PPT
  pdfLink?: string; // Optional link for PDF
  googleDocId?: string; // ID of the synced Google Doc
}

export interface Stream {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  lectures?: Lecture[];
  isHidden?: boolean; 
  allowedTeachers?: string[];
}

export interface ClassLevel {
  id: string;
  name: string;
  description: string;
  streams?: Stream[];
  institutionName?: string;
  type?: 'school' | 'university' | 'other';
  logo?: string;
}
