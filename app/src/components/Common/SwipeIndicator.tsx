import React from 'react';
import '../../styles/SwipeIndicator.css';

interface SwipeIndicatorProps {
  offset: number;
  threshold?: number;
}

export const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({ offset, threshold = 50 }) => {
  // Calculate style based on offset
  // Max sliding in to about 20px from left
  const maxDrag = 150; // Cap visual movement
  const progress = Math.min(offset / maxDrag, 1);
  
  // Start off-screen (-50px) and slide to +10px
  const translateX = -50 + (progress * 70); 
  const opacity = Math.min(offset / (threshold / 2), 1);

  if (offset <= 5) return null; // Don't show for tiny accidental moves

  return (
    <div 
        className="swipe-indicator" 
        style={{ 
            transform: `translateY(-50%) translateX(${translateX}px)`,
            opacity: opacity
        }}
    >
      &larr;
    </div>
  );
};
