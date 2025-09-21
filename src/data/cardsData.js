import blue_seed from '../assets/images/blue_seed.webp';
import coins from '../assets/images/coins.webp';
import plant_growing from '../assets/images/plant_growing.webp';
import blue_seed_src from '../assets/videos/blue_seed.mp4';
import coins_src from '../assets/videos/coins.mp4';
import plant_growing_src from '../assets/videos/plant_growing.mp4';

export const initialCards = [
  {
    title: 'Yield Aggregator',
    subtitle: 'One-click yield aggregation',
    text: 'Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity',
    src: blue_seed_src,
    poster: blue_seed,
  },
  {
    title: 'Yield-backed Stablecoin',
    subtitle: 'Unlock liquidity with BYD',
    text: 'Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time',
    src: plant_growing_src,
    poster: plant_growing,
  },
  {
    title: 'Boost DeFi Liquidity',
    subtitle: 'Boost protocols, earn more',
    text: 'Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.',
    src: coins_src,
    poster: coins,
  },
];
