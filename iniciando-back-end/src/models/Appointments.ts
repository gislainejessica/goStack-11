import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointaments')
class Appintment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appintment;
