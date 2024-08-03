export class TaskDto {
  id: string
  title: string
  description: string
  status: string
  deadline: Date
}

export interface FindAllParameters {
  title: string
}
