import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

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
  const appointment = new Appointment(provider, parsedDate);
  appointments.push(appointment);

  return resposte.json(appointment);
});

export default appointmentsRouter;
