export const CardTitle = ({ title, number }) => {
  return (
    <div className={`flex flex-row bg-grey-50 rounded-full p-3`}>
      <div className="mr-8 w-[33px] h-[33px] bg-grey-800 rounded-full flex justify-center items-center">
        <span className="text-light font-archivo font-semibold text-[15.4px]">{number}</span>
      </div>
      <h3 className={`font-archivo font-semibold text-xl text-primary`}>{title}</h3>
    </div>
  );
};
