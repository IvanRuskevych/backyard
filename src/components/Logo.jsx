import logo from '../assets/svg/logo.svg?react';

export const Logo = () => {
  return (
    <div className="inline-flex align-center gap-2 p-2">
      <img src={logo}
           alt="Backyard logo"
           width={21}
           height={21} />
      <p className={'font-gilroy font-semibold text-[16px]'}>Backyard</p>
    </div>
  );
};