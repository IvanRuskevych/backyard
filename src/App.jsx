import bg from './assets/svg/bg-up.svg?react';
import blue_seed from './assets/videos/blue_seed.mp4';
import { AboutSection, Header, VideoSection } from './modules/index.js';

function App() {
  
  return (
    <>
      <div className="relative flex flex-col w-full min-h-screen overflow-hidden bg-grey-100 py-4 px-5">
        <img src={bg}
             alt="Grid overlay"
             className="absolute -top-25 left-0 h-full w-full object-cover pointer-events-none" />
        
        {/*  Header */}
        <Header />
        
        {/*  Main content */}
        <main className="flex-1 z-0">
          <AboutSection />
          <VideoSection title="What is Backyard?"
                        src={blue_seed} />
        </main>
        
        {/*  Footer */}
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;

