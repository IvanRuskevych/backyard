import bg from './assets/svg/bg-up.svg?react';
import { AboutSection, Header } from './modules/index.js';

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
        </main>
        
        {/*  Footer */}
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default App;

