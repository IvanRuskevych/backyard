import React from 'react';

export const SliderIndicators = ({ count, activeIndex }) => {
  
  return (
    <div className="inline-flex gap-[5.6px] mt-4">
      {Array.from({ length: count }).map((_, idx) => (
        <span
          key={idx}
          className={`h-1 w-7 rounded-full transition-colors ${
            activeIndex === idx ? 'bg-swipe-active' : 'bg-swipe'
          }`}
        />
      ))}
    </div>
  );
};