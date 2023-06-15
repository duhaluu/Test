import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import BaseRepository from '@base-inherit/base.repository';
import { ResultDocument, Result } from './schemas/result.schema';

@Injectable()
export default class ResultRepository extends BaseRepository<ResultDocument> {
  constructor(
    @InjectModel(Result.name) model: PaginateModel<ResultDocument>,
  ) {
    super(model);
  }
}
