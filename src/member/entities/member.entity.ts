import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    memberID: number;
  
    @Column()
    fullName: string;

    @Column()
    memberFullName: string;

    @Column()
    memberIdCard: string;
  
    @Column()
    memberBirthDate: string;
  
    @Column()
    memberAddress: string;

    @Column()
    memberSex: string;
  
    @Column()
    memberNation: string;

    @Column()
    relationship: string;
}
