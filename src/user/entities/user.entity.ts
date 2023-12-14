import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    fullName: string;

    @Column()
    idCard: string;
  
    @Column()
    birthDate: string;
  
    @Column()
    address: string;

    @Column()
    sex: string;
  
    @Column()
    nation: string;
}
