import React, { useState } from 'react';
import '../../styles/TeacherTools.css';

interface TeacherToolsProps {
  lectureId: string;
  initialQuizLink?: string;
  initialPptLink?: string;
  initialPdfLink?: string;
  onSave: (lectureId: string, resources: { quizLink: string, pptLink: string, pdfLink: string }) => void;
  onEdit?: () => void;
}

export const TeacherTools: React.FC<TeacherToolsProps> = ({ 
  lectureId, 
  initialQuizLink, 
  initialPptLink, 
  initialPdfLink, 
  onSave, 
  onEdit 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quizLink, setQuizLink] = useState(initialQuizLink || '');
  const [pptLink, setPptLink] = useState(initialPptLink || '');
  const [pdfLink, setPdfLink] = useState(initialPdfLink || '');

  // Keep local state in sync if props change
  React.useEffect(() => {
    setQuizLink(initialQuizLink || '');
    setPptLink(initialPptLink || '');
    setPdfLink(initialPdfLink || '');
  }, [initialQuizLink, initialPptLink, initialPdfLink]);

  const handleSave = () => {
    setIsEditing(false);
    onSave(lectureId, { quizLink, pptLink, pdfLink });
  };

  return (
    <div className="teacher-tools-panel">
      <h4><span role="img" aria-label="teacher">👨‍🏫</span> Teacher Controls</h4>
      
      {onEdit && (
          <div className="tool-item" style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
            <label>Lecture Content:</label>
            <button className="btn-edit" onClick={onEdit} style={{ width: '100%' }}>Edit Content ✏️</button>
          </div>
      )}

      <div className="tool-item">
        <label>Resources (Quiz, PPT, PDF):</label>
        {isEditing ? (
          <div className="edit-mode">
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{fontSize: '0.8rem'}}>Quiz Link:</label>
                <input 
                  type="text" 
                  value={quizLink} 
                  onChange={(e) => setQuizLink(e.target.value)} 
                  placeholder="https://forms.google.com/..."
                  style={{marginBottom: '0.5rem'}}
                />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{fontSize: '0.8rem'}}>PPT Link:</label>
                <input 
                  type="text" 
                  value={pptLink} 
                  onChange={(e) => setPptLink(e.target.value)} 
                  placeholder="https://drive.google.com/..."
                  style={{marginBottom: '0.5rem'}}
                />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
                <label style={{fontSize: '0.8rem'}}>PDF Link:</label>
                <input 
                  type="text" 
                  value={pdfLink} 
                  onChange={(e) => setPdfLink(e.target.value)} 
                  placeholder="https://drive.google.com/..."
                />
            </div>
            <div className="actions">
                <button className="btn-save" onClick={handleSave}>Save</button>
                <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="view-mode">
            {quizLink ? (
                <a href={quizLink} target="_blank" rel="noopener noreferrer" className="quiz-link" style={{display: 'block', marginBottom: '0.5rem'}}>
                    📝 Open Quiz
                </a>
            ) : <span className="no-link" style={{display: 'block', marginBottom: '0.5rem'}}>No Quiz</span>}

            {pptLink ? (
                <a href={pptLink} target="_blank" rel="noopener noreferrer" className="quiz-link" style={{display: 'block', marginBottom: '0.5rem', background: '#ea580c'}}>
                    📽️ Open PPT
                </a>
            ) : <span className="no-link" style={{display: 'block', marginBottom: '0.5rem'}}>No PPT</span>}

            {pdfLink ? (
                <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="quiz-link" style={{display: 'block', marginBottom: '0.5rem', background: '#dc2626'}}>
                    📄 Open PDF
                </a>
            ) : <span className="no-link" style={{display: 'block', marginBottom: '0.5rem'}}>No PDF</span>}

            <button className="btn-edit" onClick={() => setIsEditing(true)} style={{marginTop: '0.5rem'}}>Edit Links</button>
          </div>
        )}
      </div>
    </div>
  );
};
