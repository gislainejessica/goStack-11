const express = require('express')
const { uuid, isUuid } = require('uuidv4')
const cors = require('cors')
const app = express()
const projects = []

app.use(cors())
app.use(express.json())

// middleware example
function logRequest(req, res, next){
  const { method, url } = req
  const logLabel = `[${method.toUpperCase()}] ${url}`
  console.time(logLabel)
  next()
  console.timeEnd(logLabel)
}

function validateProjectId(req, res, next){
  const { id } = req.params
  if (!isUuid(id)){
    return res.status(400).json({ error: " Id Invalido"})
  }
  return next()
}

app.use(logRequest)
app.use('/projects/:id', validateProjectId)

app.get('/projects', (req, res) => {
  const { title } = req.query

  const result = title 
  ? projects.filter(project => project.title.includes(title) )
  : projects

  return res.json(result)
})

app.post('/projects', (req, res) => {
  const { title, owner } = req.body
  const project = { id: uuid(), title, owner }
  projects.push(project)
  return res.json(project)
})

app.put('/projects/:id', (req, res) => {
  const { id } = req.params
  const { title, owner } = req.body

  const projectIndex = projects.findIndex(project => project.id === id)
  
  if (projectIndex < 0){
    return res.status(400).json({ error: 'Projeto não encontrado'})
  }
  const project = {
    id,
    title,
    owner,
  }

  projects[projectIndex] = project

  return res.json(project)
})

app.delete('/projects/:id', (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(project => project.id === id)
  
  if (projectIndex < 0){
    return res.status(400).json({ error: 'Projeto não encontrado'})
  }

  projects.slice(projectIndex, 1)

  return res.status(204).send()
})

app.listen(3333, () => {
  console.log("🐕 Servidor rodando! 3333")
})