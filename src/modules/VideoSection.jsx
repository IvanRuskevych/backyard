import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle, SliderIndicators, VideoSlide } from '../components/index.js';
import { initialCards } from '../data';
import 'swiper/css';

export const VideoSection = ({ title, cards = initialCards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className={'mb-[65px]'}>
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          {title && <SectionTitle title={title} />}
          
          {/* Swiper */}
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-10"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <VideoSlide card={card}
                            index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Swiper indicators */}
          <div className="absolute -bottom-6 left-0">
            <SliderIndicators count={cards.length}
                              activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};



