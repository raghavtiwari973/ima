import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Highlights } from './components/Highlights';
import { Timeline } from './components/Timeline';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Highlights />
      <Timeline />
      <Events />
      <Team />
      <Benefits />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
