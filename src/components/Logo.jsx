import logo from '../assets/svg/logo.svg?react';
import { BrandImage } from '../components';

export const Logo = () => {
  return (
    <div className="inline-flex align-center gap-2 p-2">
      <BrandImage src={logo}
                  alt="logo"
                  className="w-[21px] h-[21px]" />
      <p className={'font-gilroy font-semibold text-base text-primary'}>Backyard</p>
    </div>
  );
};