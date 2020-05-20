
interface techObject  {
  title: string,
  subject: string
}

interface createUserData {
  name?:string,
  email: string,
  password: string, 
  tecs: Array<string | techObject >
}

/**
 * export default function createUser(name='', email: string, password: string){
  const user = {name, email, password}
  return user
}
 */
export  default function createUser2({ name = '', email, password , tecs}: createUserData){
  const user = {name, email, password}
  return user
}