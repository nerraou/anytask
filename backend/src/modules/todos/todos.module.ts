import { Module } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [PrismaModule],
})
export class TodosModule {}
