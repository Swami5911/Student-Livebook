import React, { useState } from 'react';
import { useSwipeBack } from '../../hooks/useSwipeBack';
import { SwipeIndicator } from '../Common/SwipeIndicator';
import type { Lecture, UserRole } from '../../types';
import '../../styles/Dashboard.css';
import { TeacherTools } from './TeacherTools';
import { LectureCreatorModal } from './LectureCreatorModal';

interface UnitDashboardProps {
  lectures: Lecture[];
  title?: string;
  description?: string;
  role?: UserRole;
  onSelectLecture: (lectureId: string) => void;
  onBack?: () => void;

  onUpdateResources?: (lectureId: string, resources: { quizLink: string, pptLink: string, pdfLink: string }) => void;
  onAddLecture?: (lecture: Lecture) => void;
  onEditLecture?: (lecture: Lecture) => void;
}


export const UnitDashboard: React.FC<UnitDashboardProps> = ({ 
  lectures, 
  title = "Unit 1: Basics of Information Technology",
  description = "Explore the fundamental concepts of computing.",
  role = 'student',
  onSelectLecture,

  onBack,
  onUpdateResources,
  onAddLecture,
  onEditLecture
}) => {
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null);
  
  const { onTouchStart, onTouchMove, onTouchEnd, dragOffset } = useSwipeBack({ onBack });

  const openCreator = (lecture?: Lecture) => {
      setEditingLecture(lecture || null);
      setIsCreatorOpen(true);
  };

  return (
    <div 
        className="dashboard-container" 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y' }}
    >
      <SwipeIndicator offset={dragOffset} />
      <header className="dashboard-header">
        {onBack && (
            <button onClick={onBack} className="back-link" style={{position: 'static', marginBottom: '1rem', display: 'block', marginInline: 'auto'}}>
                &larr; Back to Subjects
            </button>
        )}
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div className="lecture-grid">
        {lectures.map((lecture, index) => {
           // Cycle through 4 images
           const images = [
             '/images/thumb_computer_basics.png',
             '/images/thumb_hardware.png',
             '/images/thumb_ai_human.png',
             '/images/thumb_network.png'
           ];
           const bgImage = images[index % images.length];

           return (
          <div 
            key={lecture.id} 
            className="lecture-card"
            onClick={() => onSelectLecture(lecture.id)}
            style={{ padding: 0, overflow: 'hidden' }}
          >
            <div className="card-image" style={{
                height: '140px',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}></div>
            <div style={{ padding: '1.5rem', position: 'relative' }}>
                <div className="card-number" style={{ top: '-1.5rem', right: '1.5rem' }}>L{index + 1}</div>
                <div className="card-content" style={{ marginTop: '0.5rem' }}>
                <h3>{lecture.title}</h3>
                <span className="card-action">Start Chapter &rarr;</span>
                
                {role === 'teacher' && (
                    <div onClick={(e) => e.stopPropagation()}>
                        <TeacherTools 
                          lectureId={lecture.id} 
                          initialQuizLink={lecture.quizLink}
                          initialPptLink={lecture.pptLink}
                          initialPdfLink={lecture.pdfLink} 
                          onSave={(id, resources) => onUpdateResources && onUpdateResources(id, resources)}
                          onEdit={() => openCreator(lecture)}
                        />
                    </div>
                )}
                </div>
            </div>
          </div>
        )})}
        
        {/* Add Lecture Card for Teachers */}
        {role === 'teacher' && (
            <div 
              className="lecture-card add-lecture-card"
              onClick={() => openCreator()}
              style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '2px dashed #9ca3af',
                  cursor: 'pointer',
                  minHeight: '300px'
              }}
            >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>➕</div>
                <h3>Add New Lecture</h3>
                <p>Paste content & auto-format</p>
            </div>
        )}
      </div>

      {(onAddLecture || onEditLecture) && (
          <LectureCreatorModal
            isOpen={isCreatorOpen}
            onClose={() => setIsCreatorOpen(false)}
            onSave={(lecture) => {
                if (editingLecture && onEditLecture) {
                    onEditLecture(lecture);
                } else if (onAddLecture) {
                    onAddLecture(lecture);
                }
                setIsCreatorOpen(false);
            }}
            nextLectureNumber={lectures.length + 1}
            initialLecture={editingLecture || undefined}
          />
      )}
    </div>
  );
};
