import React from 'react';
import { useSwipeBack } from '../../hooks/useSwipeBack';
import { SwipeIndicator } from '../Common/SwipeIndicator';
import type { Stream, UserRole } from '../../types';
import '../../styles/SelectionDashboard.css';

interface StreamSelectionProps {
  streams: Stream[];
  onSelectStream: (streamId: string) => void;
  onBack: () => void;
  role?: UserRole;
  onAddStream?: () => void;
  onDeleteStream?: (id: string) => void;
  onEditStream?: (stream: Stream) => void;
}

export const StreamSelection: React.FC<StreamSelectionProps> = ({ 
    streams, 
    onSelectStream, 
    onBack,
    role,
    onAddStream,
    onDeleteStream,
    onEditStream
}) => {
  const { onTouchStart, onTouchMove, onTouchEnd, dragOffset } = useSwipeBack({ onBack });
  return (
    <div 
        className="selection-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y' }}
    >
      <SwipeIndicator offset={dragOffset} />
      <header className="selection-header">
        <button onClick={onBack} className="back-link">
            &larr; Back to Classes
        </button>
        <h1>Select Your Subject / Stream</h1>
        <p>Pick a subject to view available lectures</p>
      </header>
      
      <div className="selection-grid">
        {(streams || []).map((stream) => (
          <div 
            key={stream.id} 
            className="selection-card stream-card" 
            onClick={() => onSelectStream(stream.id)}
            style={{ position: 'relative' }}
          >
            <div 
              className="stream-thumbnail"
              style={{ backgroundImage: `url(${stream.thumbnail})` }}
            ></div>
            <div className="stream-info">
              <h3>{stream.name}</h3>
              <p>{stream.description}</p>
            </div>

            {role === 'teacher' && (
                <div className="admin-controls-floating" onClick={(e) => e.stopPropagation()}>
                    <button 
                        className="admin-icon-btn edit-btn"
                        onClick={() => onEditStream && onEditStream(stream)}
                        title="Edit Subject"
                    >
                        ✏️
                    </button>
                    <button 
                        className="admin-icon-btn delete-btn"
                        onClick={() => {
                            if(confirm('Are you sure you want to delete this subject?')) {
                                onDeleteStream && onDeleteStream(stream.id);
                            }
                        }}
                        title="Delete Subject"
                    >
                        🗑️
                    </button>
                </div>
            )}
          </div>
        ))}

        {role === 'teacher' && onAddStream && (
            <div 
                className="selection-card stream-card" 
                onClick={onAddStream}
                style={{ border: '2px dashed #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity: 0.8, minHeight: '200px' }}
            >
                 <div style={{ fontSize: '2rem' }}>➕</div>
                 <h3>Add New Subject</h3>
            </div>
        )}
      </div>
    </div>
  );
};
