import { useEffect, useRef, useState } from 'react';
import './App.css';
import Menu from './menu'; 
import Project from './project'; 
import About from './about'; 
import Game from './game'; 

function App() {
  const [view, setView] = useState(0);

  const menuRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const gameRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    console.log("change");
    switch(view) {
      case 0:
        scrollToRef(menuRef);
        break;
      case 1:
        scrollToRef(projectRef);
        break;
      case 2:
        scrollToRef(aboutRef);
        break;
      case 3:
        scrollToRef(gameRef);
        break;
    }
  }, [view]);

  return (
    <>
      <Menu setView={setView} ref={menuRef} />
      <Project setView={setView} ref={projectRef} />
      <About setView={setView} ref={aboutRef} />
      <Game setView={setView} ref={gameRef} />
    </>
  );
}

export default App;
