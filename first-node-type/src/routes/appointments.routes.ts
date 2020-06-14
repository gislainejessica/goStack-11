import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointments';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, resposte) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointments.find((appointment) =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return resposte
      .status(400)
      .json({ message: 'this appontment is aready booked' });
  }
  const appointment = appointmentsRepository.create(provider, parsedDate);

  return resposte.json(appointment);
});

export default appointmentsRouter;
