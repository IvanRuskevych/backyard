export const Container = ({ children, className = '' }) => {
  return (
    <div
      className={` w-full mx-auto
        md:max-w-3xl xl:max-w-6xl 3xl:max-w-7xl
        ${className}`}
    >
      {children}
    </div>
  );
};
