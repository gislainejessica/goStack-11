import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import background from './assets/background.jpg';
import api from './services/api';

import './App.css';

function App() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    api.get('projects').then( response => {
      console.log(response)
      setProjects(response.data)
    })
  },[])
  
  async function handleAddProject(){
    // projects.push(`Novo Projeto${Date.now()}`)
    // setProjects([...projects, `Novo Projeto${Date.now()}` ])
    const res = await api.post('projects', {
      title: `Novo Projeto${Date.now()}`,
      owner: "Jéssica"
    })

    setProjects([...projects, res.data])
    console.log(projects)
  }

  return (
   <>
    <Header title="Projects"/>
    <img width={300} src={background} alt="vida"/>
    <ul>
      { projects.map( project => <li key={project.id} > {project.title} </li>) }
    </ul>
    <button type="button" onClick={handleAddProject}>  adicionar projeto </button>
   </>
  )
}

export default App