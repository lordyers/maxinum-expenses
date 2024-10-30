// src/transaction/transaction.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(transaction: Partial<Transaction>) {
    try {
      const newTransaction = this.transactionRepository.create(transaction);
      return await this.transactionRepository.save(newTransaction);
    } catch (error) {
      console.error('Error saving transaction:', error);
      throw new InternalServerErrorException('Failed to save transaction');
    }
  }
}
