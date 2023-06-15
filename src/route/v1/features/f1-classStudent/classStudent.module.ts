import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentSchema, student } from './schemas/student.schema';
import { ClassSchema, Class } from './schemas/class.schema';
import { FacultiesSchema, Faculties } from './schemas/faculties.schema';
import { SubjectSchema, Subject } from './schemas/subject.schema';
import { ResultSchema, Result } from './schemas/result.schema';

import ClassStudentController from './classStudent.controller';
import TestController from './test.controller';
import StudentService from './Student.service';
import StudentRepository from './Student.repository';
import ClassService from './Class.service';
import ClassRepository from './Class.repository';
import FacultiesService from './Faculties.service';
import FacultiesRepository from './Faculties.repository';
import SubjectRepository from './Subject.repository';
import SubjectService from './Subject.service';
import ResultRepository from './Result.repository';
import ResultService from './Result.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: student.name,
        schema: StudentSchema,
      },
      {
        name: Class.name,
        schema: ClassSchema,
      },
      {
        name: Faculties.name,
        schema: FacultiesSchema,
      },
      {
        name: Subject.name,
        schema: SubjectSchema,
      },
      {
        name: Result.name,
        schema: ResultSchema,
      },
    ]),
  ],
  controllers: [ClassStudentController, TestController],
  providers: [StudentService, StudentRepository, ClassService, ClassRepository,
    FacultiesService, FacultiesRepository, SubjectService, SubjectRepository,
    ResultService, ResultRepository],
  exports: [StudentService, ClassService, FacultiesService, SubjectService, ResultService],
})
export default class SpecializeModule {}
