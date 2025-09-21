export const AutoPlayVideo = ({ src, width = 179, height = 179, title, poster }) => {
  return (
    <div className="overflow-hidden"
         style={{ width, height }}>
      <video
        className="inline w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        title={title}
        aria-label={title}
      >
        Ваш браузер не підтримує відео: {title}
      </video>
    </div>
  );
};
