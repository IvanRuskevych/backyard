export const AutoPlayVideo = ({ src, width = 179, height = 179 }) => {
  return (
    <div className="overflow-hidden">
      <video
        className={`inline w-[${width}px] h-[${height}px] object-cover`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        Ваш браузер не підтримує відео.
      </video>
    </div>
  );
};
