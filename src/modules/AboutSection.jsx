import logo from '../assets/svg/logo-in-text.svg?react';
import { BrandImage } from '../components';

export const AboutSection = () => {
  return (
    <section className={'mb-[67px]'}>
      {/* Title for mobile */}
      <h1 className="md:hidden mb-3 font-archivo font-semibold text-[58px]/[110%] text-primary">
        The yield-backed stablecoin protocol boosting
        <br /> DeFi {'   '}
        <BrandImage src={logo}
                    alt={'Backyard logo'}
                    className="inline-block w-[60px] h-[60px]" />
        <br />{'   '} liquidity</h1>
      
      {/* Title for BPs: 768, 1280, 1920 */}
      <div className="hidden md:flex md:justify-between md:mb-4">
        <h1 className="font-archivo font-semibold text-5xl/[110%] xl:text-7xl/[110%] 3xl:text-[90px]/[110%] text-primary">
          The yield-backed stablecoin protocol boosting DeFi liquidity
        </h1>
        <BrandImage src={logo}
                    alt={'Backyard logo'}
                    className="hidden md:inline-block md:ml-3
                        md:w-[152px] md:h-[152px]
                        xl:w-[212px] xl:h-[212px]
                        3xl:w-[276px] 3xl:h-[276px]" />
      
      </div>
      
      <p className="font-semibold text-xl md:text-base xl:text-xl 3xl:text-2xl text-muted">
        Keep your yield working for you — we keep your liquidity accessible
      </p>
      
      <div className="mt-8.5 xl:mt-17.5 3xl:mt-20.5 flex gap-5 justify-between md:justify-start ">
        <button className="px-7 py-4.5 rounded-full md:px-[112px] bg-button-dark hover:bg-button-dark-hover transition font-archivo font-semibold text-base text-inverted cursor-pointer">Join
          Whitelist
        </button>
        <button className="px-7 py-4 md:px-15.5 rounded-full bg-button-light hover:bg-button-light-hover transition font-archivo font-semibold text-base text-dark cursor-pointer">
          Read Docs
        </button>
      </div>
    </section>
  );
};