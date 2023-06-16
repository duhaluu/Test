import { PaginateModel, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

import BaseRepository from '@base-inherit/base.repository';
import { StudentDocument, Student } from '@features/f1-student/schemas/student.schema';

@Injectable()
export default class TestRepository extends BaseRepository<StudentDocument> {
  constructor(
    @InjectModel(Student.name) model: PaginateModel<StudentDocument>,

  ) {
    super(model);
  }
}
