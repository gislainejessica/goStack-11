import { Router } from 'express';

import apointmentRouter from './appointments.routes';
import usersRouter from './users.routes';

const routtes = Router();

routtes.use('/appointments', apointmentRouter);
routtes.use('/users', usersRouter);


export default routtes;
