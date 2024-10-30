// src/transaction/transaction.controller.ts
import { Controller, Post, Body, Logger, BadRequestException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionController {
  private readonly logger = new Logger(TransactionController.name);

  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() transaction: Partial<Transaction>) {
    this.logger.log(`Received transaction: ${JSON.stringify(transaction)}`);
    if (!transaction.sum || !transaction.category || !transaction.dateTime) {
      this.logger.warn('Validation failed: Missing required fields.');
      throw new BadRequestException('Missing required fields');
    }
    return await this.transactionService.create(transaction);
  }
}
