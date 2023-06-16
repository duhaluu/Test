import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';

import { ClassDocument } from './schemas/class.schema';
import ClassRepository from './Class.repository';

@Injectable()
export default class ClassService extends BaseService<ClassDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly classRepository: ClassRepository,
  ) {
    super(logger, classRepository);
  }
}
