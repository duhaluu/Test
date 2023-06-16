import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';
import * as lodash from 'lodash';

import { Student, StudentDocument } from './schemas/student.schema';
import StudentRepository from './Student.repository';

@Injectable()
export default class StudentService extends BaseService<StudentDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly studentRepository: StudentRepository,

  ) {
    super(logger, studentRepository);
  }
}
