import React from 'react';
import type { Lecture, UserRole } from '../../types';
import { BlockRenderer } from './BlockRenderer';
import { useSwipeBack } from '../../hooks/useSwipeBack';
import { SwipeIndicator } from '../Common/SwipeIndicator';

interface LectureViewProps {
  lecture: Lecture;
  rotation?: UserRole; // Fixing potential typo from original file if any, but sticking to existing pattern. original was role: UserRole
  role: UserRole;
  lectureIndex?: number;
  onBack?: () => void;
}

export const LectureView: React.FC<LectureViewProps> = ({ lecture, role, lectureIndex, onBack }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, dragOffset } = useSwipeBack({ onBack });

  return (
    <div 
      className="lecture-container" 
      data-role={role}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      <SwipeIndicator offset={dragOffset} />
      <header className="lecture-header">
        <h1>Lecture {lectureIndex !== undefined ? lectureIndex + 1 : lecture.lectureNumber}: {lecture.title}</h1>
        <div className="objectives">
          <h3>Learning Objectives</h3>
          <ul>
            {(lecture.objectives || []).map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>
      </header>

      <div className="lecture-content">
        {(lecture.sections || []).map((section) => (
          <section key={section.id} className="lecture-section">
            <h2>{section.title}</h2>
            {(section.blocks || []).map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </section>
        ))}
      </div>

      <div className="quiz-section" style={{ marginTop: '3rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
        <h3>Knowledge Check</h3>
        {lecture.quizLink ? (
          <>
            <p>Ready to test your understanding? Take the quiz below.</p>
            <a 
              href={lecture.quizLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-large"
              style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}
            >
              Take Quiz 📝
            </a>
          </>
        ) : (
          <div className="coming-soon-message" style={{ color: '#666', fontStyle: 'italic' }}>
            <p>Quiz Coming Soon... Waiting for update ⏳</p>
            <button disabled className="btn btn-secondary" style={{ opacity: 0.6, cursor: 'not-allowed', marginTop: '0.5rem' }}>
              Quiz Not Available Yet
            </button>
          </div>
        )}

        <div className="additional-resources" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {lecture.pptLink && (
                <a 
                    href={lecture.pptLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ea580c', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}
                >
                    <span>📽️</span> View PPT
                </a>
            )}

            {lecture.pdfLink && (
                <a 
                    href={lecture.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#dc2626', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px' }}
                >
                    <span>📄</span> Download PDF
                </a>
            )}
        </div>
      </div>

    </div>
  );
};
