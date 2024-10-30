// src/transaction/transaction.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateTime: string;

  @Column()
  sum: number;

  @Column()
  category: string;

  @Column({ nullable: true })
  comment: string;

//   @Column()
//   author: string;
}
