import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionTitle, SliderIndicators, VideoSlide, VideoSlideGrid } from '../components/index.js';
import { initialCards } from '../data';
import 'swiper/css';

export const VideoSection = ({ title, cards = initialCards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="mb-16">
      {/* mobile & md: Swiper */}
      <div className="relative">
        {title && <SectionTitle title={title}
                                className={`text-[28px] md:text-[42px] 3xl:text-5xl md:mb-14`} />}
        
        <div className="block xl:hidden">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-10"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                {/* mobile → VideoSlide, md → VideoSlideGrid */}
                <div className="block md:hidden">
                  <VideoSlide card={card}
                              index={index} />
                </div>
                <div className="hidden md:block">
                  <VideoSlideGrid card={card}
                                  index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Swiper indicators */}
          <div className="flex justify-center mt-4">
            <SliderIndicators count={cards.length}
                              activeIndex={activeIndex} />
          </div>
        </div>
        
        {/* xl & up: no swiper, just list */}
        <div className="hidden xl:flex xl:justify-center xl:gap-19.5 3xl:gap-36">
          {cards.map((card, index) => (
            <div key={index}
                 className="w-full max-w-md">
              <VideoSlide card={card}
                          index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


