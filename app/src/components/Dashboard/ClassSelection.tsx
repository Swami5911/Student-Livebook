import React from 'react';
import type { ClassLevel, UserRole } from '../../types';
import '../../styles/SelectionDashboard.css';

interface ClassSelectionProps {
  classes: ClassLevel[];
  onSelectClass: (classId: string) => void;
  role?: UserRole;
  onAddClass?: () => void;
  onDeleteClass?: (id: string) => void;
  onEditClass?: (cls: ClassLevel) => void;
}

export const ClassSelection: React.FC<ClassSelectionProps> = ({ 
    classes, 
    onSelectClass,
    role,
    onAddClass,
    onDeleteClass,
    onEditClass
}) => {
  return (
    <div className="selection-container">
      <header className="selection-header">
        <h1>Select Your Class / Degree</h1>
        <p>Choose your current academic level to continue</p>
      </header>
      
      <div className="selection-grid">
        {classes.map((cls) => (
          <div 
            key={cls.id} 
            className="selection-card" 
            onClick={() => onSelectClass(cls.id)}
            style={{ position: 'relative' }}
          >
            <div className="selection-icon">
              {/* You could add specific icons here based on ID if needed */}
              📚
            </div>
            <h3>{cls.name}</h3>
            <p>{cls.description}</p>

            {role === 'teacher' && (
                <div className="admin-controls-floating" onClick={(e) => e.stopPropagation()}>
                    <button 
                        className="admin-icon-btn edit-btn"
                        onClick={() => onEditClass && onEditClass(cls)}
                        title="Edit Class"
                    >
                        ✏️
                    </button>
                    <button 
                        className="admin-icon-btn delete-btn"
                        onClick={() => {
                            if(confirm('Are you sure you want to delete this course?')) {
                                onDeleteClass && onDeleteClass(cls.id);
                            }
                        }}
                        title="Delete Class"
                    >
                         🗑️
                    </button>
                </div>
            )}
          </div>
        ))}

        {role === 'teacher' && onAddClass && (
            <div 
                className="selection-card" 
                onClick={onAddClass}
                style={{ border: '2px dashed #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity: 0.8 }}
            >
                 <div style={{ fontSize: '2rem' }}>➕</div>
                 <h3>Add New Class</h3>
            </div>
        )}
      </div>
    </div>
  );
};
