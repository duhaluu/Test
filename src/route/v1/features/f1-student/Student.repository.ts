import { PaginateModel, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import BaseRepository from '@base-inherit/base.repository';
import { StudentDocument, Student } from './schemas/student.schema';

@Injectable()
export default class StudentRepository extends BaseRepository<StudentDocument> {
  constructor(
    @InjectModel(Student.name) model: PaginateModel<StudentDocument>,
  ) {
    super(model);
  }
}
