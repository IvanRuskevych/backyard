import React from 'react';
import { AutoPlayVideo } from './AutoPlayVideo.jsx';
import { CardThumb } from './CardThumb.jsx';
import { CardTitle } from './CardTitle.jsx';

export const VideoSlideGrid = ({ card, index }) => {
  return (
    <div
      className={`
        flex flex-col items-center
        md:grid md:grid-cols-2 md:gap-6 md:items-start
      `}
    >
      {/* Left side (CardTitle + CardThumb) */}
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <CardTitle title={card.title}
                   number={index + 1} />
        <CardThumb title={card.subtitle}
                   text={card.text} />
      </div>
      
      {/* Right side (AutoPlayVideo) */}
      <div className="order-1 md:order-2 md:row-span-2 flex justify-center">
        <AutoPlayVideo src={card.src}
                       width={245}
                       height={245} />
      </div>
    </div>
  );
};