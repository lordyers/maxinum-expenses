// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'expenses.db',
      entities: [Transaction],
      synchronize: true, // автоматически создает таблицы на основе сущностей
    }),
    TransactionModule, // импортируйте модуль транзакций
  ],
})
export class AppModule {}
