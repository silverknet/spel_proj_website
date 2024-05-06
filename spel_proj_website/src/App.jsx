import React, { useEffect, useRef, useState, useCallback } from 'react';
import './App.css';
import Menu from './menu';
import Project from './project';
import About from './about';
import Game from './game';

function App() {
  const [view, setView] = useState(0);
  const scrolling = useRef(false);

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToRef = useCallback((viewNr) => {
    if (refs[viewNr].current && !scrolling.current) {
      scrolling.current = true; 
      refs[viewNr].current.scrollIntoView({ behavior: 'smooth' });
      setView(viewNr);
      setTimeout(() => {
        scrolling.current = false;
      }, 1400);
    }
  }, [refs]);

  const handleScroll = useCallback((event) => {
    event.preventDefault();
    if (scrolling.current) return; 

    const direction = event.deltaY > 0 ? 'down' : 'up';
    if (direction === 'down' && view < refs.length - 1) {
      scrollToRef(view + 1);
    } else if (direction === 'up' && view > 0) {
      scrollToRef(view - 1);
    }
  }, [scrollToRef, view]);

  useEffect(() => {
    const handleWheel = (event) => {
      handleScroll(event);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleScroll]);

  return (
    <>
      <Menu scrollToRef={scrollToRef} ref={refs[0]} />
      <Project scrollToRef={scrollToRef} ref={refs[1]} />
      <About scrollToRef={scrollToRef} ref={refs[2]} />
      <Game scrollToRef={scrollToRef} ref={refs[3]} />
    </>
  );
}

export default App;
