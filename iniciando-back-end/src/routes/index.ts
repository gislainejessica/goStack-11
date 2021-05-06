import { Router } from 'express';

import apointmentRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';


const routtes = Router();

routtes.use('/appointments', apointmentRouter);
routtes.use('/users', usersRouter);
routtes.use('/sessions', sessionsRouter);


export default routtes;
