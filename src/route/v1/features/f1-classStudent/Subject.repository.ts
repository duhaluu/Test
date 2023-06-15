import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import BaseRepository from '@base-inherit/base.repository';
import { SubjectDocument, Subject } from './schemas/subject.schema';

@Injectable()
export default class SubjectRepository extends BaseRepository<SubjectDocument> {
  constructor(
    @InjectModel(Subject.name) model: PaginateModel<SubjectDocument>,
  ) {
    super(model);
  }
}
