import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
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
  public async execute({ provider, date }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('this appontment is aready booked');
    }
    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
