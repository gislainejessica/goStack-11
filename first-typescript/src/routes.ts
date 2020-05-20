import {Request, Response} from 'express'

export function helloo(req: Request, res: Response){
  return res.json({ message: ' hello world'})
}