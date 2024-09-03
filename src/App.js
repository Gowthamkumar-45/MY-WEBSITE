import React from 'react'
import "./App.css";
import Header from "./Components/Header/Header.js";
import TopContainer from "./Components/TopContainer/TopContainer.js";
import Skills from './Components/Skills/Skills.js';
import ExpContainers from './Components/ExpContainer/ExpContainers.js';
import Contact from './Components/Contact/Contact.js';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer.js';










const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <Skills/>
      <ProjectContainer/>
      <ExpContainers/>
      <Contact/>
    </div>
  )
}

export default App
