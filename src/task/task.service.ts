import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { TaskDto } from './task.dto'

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = []

  create(task: TaskDto) {
    this.tasks.push(task)
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.filter((task) => task.id === id)

    if (foundTask.length) {
      return foundTask[0]
    }

    throw new HttpException(
      `Task with id ${id} not found`,
      HttpStatus.NOT_FOUND,
    )
  }
}
