import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../users/decorators/user.decorators';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @User('id') userId: number,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.todosService.createTodo(userId, createTodoDto);

    return {
      message: 'success',
    };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getTodos(@User('id') userId: number) {
    return {
      data: await this.todosService.findUserTodos(userId),
    };
  }
}
