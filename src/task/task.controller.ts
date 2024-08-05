import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { FindAllParameters, TaskDto, TaskRouteParameters } from './task.dto'
import { TaskService } from './task.service'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() task: TaskDto): Promise<TaskDto> {
    return await this.taskService.create(task)
  }

  @Get('/:id')
  async findById(@Param() params: TaskRouteParameters): Promise<TaskDto> {
    return this.taskService.findById(params.id)
  }

  @Get()
  async findAll(@Query() params: FindAllParameters): Promise<TaskDto[]> {
    return this.taskService.findAll(params)
  }

  @Put('/:id')
  async update(@Param() params: TaskRouteParameters, @Body() task: TaskDto) {
    await this.taskService.update(params.id, task)
  }

  @Delete('/:id')
  remove(@Param() params: TaskRouteParameters) {
    return this.taskService.remove(params.id)
  }
}
