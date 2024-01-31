import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  createTodo(userId: number, createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        userId,
        text: createTodoDto.text,
      },
    });
  }

  findUserTodos(userId: number) {
    return this.prisma.todo.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        text: true,
        createdAt: true,
      },
    });
  }
}
