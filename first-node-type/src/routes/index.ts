import { Router } from 'express';

const routtes = Router();

routtes.get('/', (req, res) => res.json({ message: 'hello gostack' }));

export default routtes;
