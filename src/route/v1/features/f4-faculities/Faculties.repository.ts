import { PaginateModel } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import BaseRepository from '@base-inherit/base.repository';
import { FacultiesDocument, Faculties } from './schemas/faculties.schema';

@Injectable()
export default class FacultiesRepository extends BaseRepository<FacultiesDocument> {
  constructor(
    @InjectModel(Faculties.name) model: PaginateModel<FacultiesDocument>,
  ) {
    super(model);
  }
}
