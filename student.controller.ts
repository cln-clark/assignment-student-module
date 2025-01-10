import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.studentService.remove(id);
  }
}

