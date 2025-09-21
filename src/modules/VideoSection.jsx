import { useState } from 'react';
import { SectionTitle } from '../components/Titles';
import { VideoList, VideoSwiper } from '../components/Video';
import { initialCards } from '../data';
import 'swiper/css';

export const VideoSection = ({ title, cards = initialCards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="mb-16">
      <div className="relative">
        {title && <SectionTitle title={title}
                                className={`text-[28px] md:text-[42px] 3xl:text-5xl md:mb-14`} />}
        
        {/* mobile & md: swiper */}
        <VideoSwiper cards={cards}
                     activeIndex={activeIndex}
                     setActiveIndex={setActiveIndex} />
        
        {/* xl & up: just list */}
        <VideoList cards={cards} />
      </div>
    </section>
  );
};


