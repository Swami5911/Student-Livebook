import { useRef, useState } from 'react';
import type { TouchEvent } from 'react';

interface UseSwipeBackOptions {
  onBack?: () => void;
  threshold?: number;
}

export const useSwipeBack = ({ onBack, threshold = 50 }: UseSwipeBackOptions) => {
  const touchStart = useRef<{x: number, y: number} | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const onTouchStart = (e: TouchEvent) => {
    setDragOffset(0);
    touchStart.current = {
        x: e.targetTouches[0].clientX,
        y: e.targetTouches[0].clientY
    };
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!touchStart.current) return;
    
    const currentX = e.targetTouches[0].clientX;
    const currentY = e.targetTouches[0].clientY;
    
    const diffX = currentX - touchStart.current.x;
    const diffY = currentY - touchStart.current.y;

    // Only track if it's primarily a horizontal swipe to the right
    if (diffX > 0 && Math.abs(diffX) > Math.abs(diffY)) {
        setDragOffset(diffX);
    } else {
        setDragOffset(0);
    }
  };

  const onTouchEnd = () => {
    if (dragOffset > threshold && onBack) {
      onBack();
    }
    setDragOffset(0);
    touchStart.current = null;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    dragOffset 
  };
};
