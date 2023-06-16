import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentSchema, Student } from './schemas/student.schema';

import StudentController from './student.controller';
import StudentService from './Student.service';
import StudentRepository from './Student.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Student.name,
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
  exports: [StudentService, StudentRepository, MongooseModule],
})
export default class StudentModule {}
