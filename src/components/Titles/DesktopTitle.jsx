import logo from '../../assets/svg/logo-in-text.svg?react';
import { BrandImage } from '../ui';

export const DesktopTitle = () => (
  <div className="hidden md:flex md:justify-between md:mb-4">
    <h1 className="font-archivo font-semibold text-5xl/[110%] xl:text-7xl/[110%] 3xl:text-[90px]/[110%] text-primary">
      The yield-backed stablecoin protocol boosting DeFi liquidity
    </h1>
    <BrandImage
      src={logo}
      alt="Backyard logo"
      className="hidden md:inline-block md:ml-3
        md:w-[152px] md:h-[152px]
        xl:w-[212px] xl:h-[212px]
        3xl:w-[276px] 3xl:h-[276px]"
    />
  </div>
);
