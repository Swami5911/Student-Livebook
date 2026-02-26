
import React, { useState } from 'react';
import '../../styles/LoginModal.css'; // Reuse container styles
import { parseLectureContent, lectureToRawText } from '../../utils/LectureParser';
import type { Lecture } from '../../types';
import { BlockRenderer } from '../Lecture/BlockRenderer';

interface LectureCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lecture: Lecture) => void;
  nextLectureNumber: number;
  initialLecture?: Lecture;
}

export const LectureCreatorModal: React.FC<LectureCreatorModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave,
  nextLectureNumber,
  initialLecture
}) => {
  const [step, setStep] = useState<'input' | 'preview'>('input');
  const [title, setTitle] = useState('');
  const [rawContent, setRawContent] = useState('');
  const [previewLecture, setPreviewLecture] = useState<Lecture | null>(null);

  React.useEffect(() => {
    if (isOpen && initialLecture) {
        setTitle(initialLecture.title);
        setRawContent(lectureToRawText(initialLecture));
        // Keep ID if editing? The parser generates new IDs. 
        // For simplicity in this demo, we might replace the whole object.
    } else if (isOpen) {
        // Reset for new
        setTitle('');
        setRawContent('');
    }
  }, [isOpen, initialLecture]);


  if (!isOpen) return null;

  const handlePreview = () => {
    if (!title || !rawContent) {
        alert('Please enter title and content');
        return;
    }
    const lecture = parseLectureContent(title, nextLectureNumber, rawContent);
    setPreviewLecture(lecture);
    setStep('preview');
  };

  const handleSave = () => {
    if (previewLecture) {
        // If editing, preserve original ID and Links
        const finalLecture = initialLecture ? { 
            ...previewLecture, 
            id: initialLecture.id,
            quizLink: initialLecture.quizLink,
            pptLink: initialLecture.pptLink,
            pdfLink: initialLecture.pdfLink
        } : previewLecture;
        
        onSave(finalLecture);
        // Reset
        setTitle('');
        setRawContent('');
        setStep('input');
        onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '800px', width: '90%' }}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>
            {initialLecture ? 'Edit Lecture ✏️' : 'Add New Lecture �'}
        </h2>
        
        {step === 'input' ? (
            <div className="creator-input">
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Lecture Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                        placeholder="e.g., Introduction to Cloud Computing"
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Paste Content (Format: Objective:..., # Section Title, * List Item)
                    </label>
                    <textarea 
                        value={rawContent}
                        onChange={e => setRawContent(e.target.value)}
                        placeholder="Paste your lecture content here..."
                        style={{ width: '100%', height: '300px', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'monospace' }}
                    />
                </div>

                <div className="actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button className="btn btn-outline" onClick={onClose}>Cancel</button>
                    <button className="btn btn-primary" onClick={handlePreview}>Preview &rarr;</button>
                </div>
            </div>
        ) : (
            <div className="creator-preview">
                {previewLecture && (
                    <div className="preview-container" style={{ maxHeight: '60vh', overflowY: 'auto', padding: '1rem', background: '#f9fafb', borderRadius: '8px', marginBottom: '1rem' }}>
                        <h3>Lecture {previewLecture.lectureNumber}: {previewLecture.title}</h3>
                        {(previewLecture.sections || []).map(section => (
                            <div key={section.id} style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ color: '#2563eb' }}>{section.title}</h4>
                                {(section.blocks || []).map(block => (
                                    <BlockRenderer key={block.id} block={block} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
                
                <div className="actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button className="btn btn-outline" onClick={() => setStep('input')}>&larr; Back to Edit</button>
                    <button className="btn btn-primary" onClick={handleSave}>Save & Publish ✅</button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
