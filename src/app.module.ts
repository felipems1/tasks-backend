/* eslint-disable n/no-path-concat */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TaskEntity } from './task/task.entity'
import { TaskModule } from './task/task.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TaskModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [TaskEntity],
        synchronize: false,
        migrations: [__dirname + 'db/migrations/**/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      }),
    }),
    TypeOrmModule.forFeature([TaskEntity]),
  ],
})
export class AppModule {}
