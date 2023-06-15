import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';

import { FacultiesDocument } from './schemas/faculties.schema';
import FacultiesRepository from './Faculties.repository';

@Injectable()
export default class ClassService extends BaseService<FacultiesDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly facultiesRepository: FacultiesRepository,
  ) {
    super(logger, facultiesRepository);
  }
}
