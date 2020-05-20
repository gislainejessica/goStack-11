import express from 'express'
import { helloo }from './routes'

import createUser from './services/createUser'

export function hello(){
 // const user = createUser('name','email','eee')
 const user = createUser({
  name,
  email: 'oee',
  password: 'eee', 
  tecs: ['oi', 'ola', 'hey', { title: 'ei', subject: 'o'}]
 })
}

const app = express()

app.get('/', helloo)

app.listen(3333)