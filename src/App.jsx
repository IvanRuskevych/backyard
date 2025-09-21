import bg from './assets/svg/bg-up.svg?react';
import { Container } from './components/ui';
import { AboutSection, Footer, Header, VideoSection } from './modules/index.js';

function App() {
  
  return (
    <>
      <div className="relative flex flex-col w-full min-h-screen overflow-hidden bg-grey-100 py-4 px-5">
        <img src={bg}
             alt="Grid overlay"
             className="absolute -top-40 left-0 h-full w-full object-cover pointer-events-none" />
        
        {/*  Header */}
        <header className={'z-0'}>
          <Container>
            <Header />
          </Container>
        </header>
        
        {/*  Main content */}
        <main className="flex-1 z-0">
          <Container>
            <AboutSection />
            <VideoSection title="What is Backyard?" />
          </Container>
        </main>
        
        {/*  Footer */}
        <footer className={'z-0'}>
          <Container>
            <Footer />
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;

