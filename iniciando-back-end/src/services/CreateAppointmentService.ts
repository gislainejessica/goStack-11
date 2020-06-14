import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointments';
import AppointmentRepository from '../repositories/AppointmentsRepository';
/**
 * [x] Recebimento das informações
 * [/] Tratativa de erros e exweções
 * [x] acesso ao repositório
 *
 * Dependence Infersion
 */

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('this appontment is aready booked');
    }
    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentService;
