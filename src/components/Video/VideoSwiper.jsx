import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderIndicators, VideoSlide, VideoSlideGrid } from './index.js';
import 'swiper/css';

export const VideoSwiper = ({ cards, activeIndex, setActiveIndex }) => {
  return (
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
  );
};
