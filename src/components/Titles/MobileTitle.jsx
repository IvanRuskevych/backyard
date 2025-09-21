import logo from '../../assets/svg/logo-in-text.svg?react';
import { BrandImage } from '../ui';

export const MobileTitle = () => (
  <h1 className="md:hidden mb-3 font-archivo font-semibold text-[58px]/[110%] text-primary">
    The yield-backed stablecoin protocol boosting
    <br /> DeFi{' '}
    <BrandImage
      src={logo}
      alt="Backyard logo"
      className="inline-block w-[60px] h-[60px]"
    />
    <br /> liquidity
  </h1>
);
