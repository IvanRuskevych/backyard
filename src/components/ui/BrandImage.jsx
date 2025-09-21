export const BrandImage = ({ src, alt = 'default alt', className = '' }) => {
  return (
    <div
      className={`shrink-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};