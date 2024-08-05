import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator'

export enum TaskStatusEnum {
  TO_DO = 'TO_DO',
  COMPLETED = 'COMPLETED',
}

export class TaskDto {
  @IsUUID()
  @IsOptional()
  id?: string

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  title: string

  @IsString()
  @MinLength(5)
  @MaxLength(512)
  description: string

  @IsEnum(TaskStatusEnum)
  @IsOptional()
  status: string

  @IsDateString()
  deadline: Date
}

export interface FindAllParameters {
  title: string
}

export class TaskRouteParameters {
  @IsUUID()
  id: string
}
