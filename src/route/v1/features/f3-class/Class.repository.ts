import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import BaseRepository from '@base-inherit/base.repository';
import { ClassDocument, Class } from './schemas/class.schema';

@Injectable()
export default class ClassRepository extends BaseRepository<ClassDocument> {
  constructor(
    @InjectModel(Class.name) model: PaginateModel<ClassDocument>,
  ) {
    super(model);
  }
}
