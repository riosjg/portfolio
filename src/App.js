import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Intro from './views/Intro'
import AboutMe from './views/AboutMe'
import Projects from './views/Projects'

function App() {
  return (
    <div className="App">
      <Nav />
    <Intro />
    <Projects />
    {/* <AboutMe /> */}
    </div>
  );
}

export default App;
