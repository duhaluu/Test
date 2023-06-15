import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';

import { SubjectDocument } from './schemas/subject.schema';
import SubjectRepository from './Subject.repository';

@Injectable()
export default class SubjectService extends BaseService<SubjectDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly subjectRepository: SubjectRepository,
  ) {
    super(logger, subjectRepository);
  }
}
