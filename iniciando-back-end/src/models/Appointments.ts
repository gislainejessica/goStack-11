import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appintment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string')
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appintment;
