import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Intro from './views/Intro'
import AboutMe from './views/AboutMe'

function App() {
  return (
    <div className="App">
      <Nav />
    <Intro />
    <AboutMe />
    </div>
  );
}

export default App;
