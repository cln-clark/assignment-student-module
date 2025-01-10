import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Update an existing student
  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, studentData);
    return this.studentRepository.findOne({
        where: { id },
    });
  }


}
