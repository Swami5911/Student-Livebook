import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';
import '../../styles/AITutor.css';
import { AITutorWindow } from './AITutorWindow';

interface AITutorButtonProps {
    uid: string;
    contextData: any;
}

export const AITutorButton: React.FC<AITutorButtonProps> = ({ uid, contextData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ai-tutor-container">
            {isOpen && (
                <AITutorWindow 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    uid={uid} 
                    contextData={contextData} 
                />
            )}
            
            <button 
                className={`ai-tutor-fab ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Ask AI Tutor"
            >
                {isOpen ? <X size={24} /> : <Bot size={24} />}
            </button>
        </div>
    );
};
