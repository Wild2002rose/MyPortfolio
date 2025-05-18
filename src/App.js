import './App.css';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
