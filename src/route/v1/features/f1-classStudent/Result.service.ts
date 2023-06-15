import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';

import { ResultDocument } from './schemas/result.schema';
import ResultRepository from './Result.repository';

@Injectable()
export default class SubjectService extends BaseService<ResultDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly resultRepository: ResultRepository,
  ) {
    super(logger, resultRepository);
  }
}
