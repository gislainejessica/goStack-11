import { Router, response } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appontments = appointmentsRepository.all();

  return response.json(appontments);
});

appointmentsRouter.post('/', (request, resposte) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return resposte.json(appointment);
  } catch (err) {
    return resposte.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
