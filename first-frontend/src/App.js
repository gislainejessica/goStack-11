import React, { useState } from 'react';
import Header from './components/Header';

import background from './assets/background.jpg';


import './App.css';

function App() {
  const [projects, setProjects] = useState(['Dev app,', 'Frontend web'])
  function handleAddProject(){
    //projects.push(`Novo Projeto${Date.now()}`)
    setProjects([...projects, `Novo Projeto${Date.now()}` ])
    console.log(projects)
  }

  return (
   <>
    <Header title="Projects"/>
    <img width={300} src={background} alt="vida"/>
    <ul>
      { projects.map( project => <li key={project} > {project} </li>) }
    </ul>
    <button type="button" onClick={handleAddProject}>  adicionar projeto </button>
   </>
  )
}

export default App