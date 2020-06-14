import { Router } from 'express';

import apointmentRouter from './appointments.routes';

const routtes = Router();

routtes.use('/appointments', apointmentRouter);

export default routtes;
