import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/UpdateTodoDto';

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

  updateTodo(todoId: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: {
        id: todoId,
      },
      data: updateTodoDto,
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
        done: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
