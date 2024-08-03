import { Injectable } from '@nestjs/common'
import { TaskDto } from './task.dto'

@Injectable()
export class TaskService {
  create(task: TaskDto) {
    console.log(task)
  }
}
