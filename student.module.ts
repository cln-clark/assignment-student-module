import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Register the Student entity with TypeORM
  controllers: [StudentController],               // Register the controller to handle requests
  providers: [StudentService],                    // Register the service to handle business logic
})
export class StudentModule {}
