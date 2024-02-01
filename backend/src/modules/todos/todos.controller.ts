import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../users/decorators/user.decorators';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/UpdateTodoDto';

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

  @Patch('/:id([0-9]{1,11})')
  @UseGuards(JwtAuthGuard)
  async updateTodo(
    @Param('id', ParseIntPipe) todoId: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    await this.todosService.updateTodo(todoId, updateTodoDto);

    return {
      message: 'success',
    };
  }
}
