import { VideoSlide } from './VideoSlide.jsx';

export const VideoList = ({ cards }) => {
  return (
    <div className="hidden xl:flex xl:justify-center xl:gap-19.5 3xl:gap-36">
      {cards.map((card, index) => (
        <div key={index}
             className="w-full max-w-md">
          <VideoSlide card={card}
                      index={index} />
        </div>
      ))}
    </div>
  );
};
