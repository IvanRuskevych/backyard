import logo from '../assets/svg/logo-in-text.svg?react';

export const AboutSection = () => {
  return (
    <section className={'mb-[67px]'}>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-3 font-archivo font-semibold text-6xl/[110%] text-primary">
            The yield-backed stablecoin protocol boosting <br /> DeFi {'   '}
            <img
              src={logo}
              alt="Backyard logo"
              width={60}
              height={60}
              className="inline-block ml-1 shrink-0 sm:ml-3"
            />
            <br />{'   '} liquidity</h1>
          <p className="font-semibold text-xl text-muted">Keep your yield working for you —
            we keep your liquidity accessible</p>
          <div className="mt-9 flex justify-between">
            <button className="px-7 py-4 rounded-full bg-button-dark hover:bg-button-dark-hover transition font-archivo font-semibold text-base text-inverted cursor-pointer">Join
              Whitelist
            </button>
            <button className="px-7 py-4 rounded-full bg-button-light hover:bg-button-light-hover transition font-archivo font-semibold text-base text-dark cursor-pointer">
              Read Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};