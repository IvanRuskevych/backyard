import React from 'react';
import { AutoPlayVideo } from './AutoPlayVideo.jsx';
import { CardThumb } from './CardThumb.jsx';
import { CardTitle } from './CardTitle.jsx';

export const VideoSlide = ({ card, index }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Video & CardTitle */}
      <div className="relative flex items-center justify-center pb-9 mb-4 w-full max-w-md">
        <AutoPlayVideo src={card.src} />
        <div className="absolute bottom-0 w-full">
          <CardTitle title={card.title}
                     number={index + 1} />
        </div>
      </div>
      
      {/* CardThumb */}
      <div className="w-full max-w-md">
        <CardThumb title={card.subtitle}
                   text={card.text} />
      </div>
    </div>
  );
};