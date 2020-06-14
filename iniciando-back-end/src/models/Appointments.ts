import { uuid } from 'uuidv4';

class Appintment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appintment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appintment;
