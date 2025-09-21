export const AutoPlayVideo = ({ src, width = 179, height = 179 }) => {
  return (
    <div className={`overflow-hidden`}
         style={{ width, height }}>
      <video
        className={`inline w-full h-full object-cover`}
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
