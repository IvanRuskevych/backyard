import { AboutButtons } from '../components/Buttons';
import { AboutText } from '../components/Texts';
import { DesktopTitle, MobileTitle } from '../components/Titles';

export const AboutSection = () => {
  return (
    <section className={'mb-[67px]'}>
      <MobileTitle />
      <DesktopTitle />
      <AboutText />
      <AboutButtons />
    </section>
  );
};