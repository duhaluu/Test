import { PartialType } from '@nestjs/mapped-types';
import CreateStudentDto from './create-student.dto';

export default class UpdateStudentDto extends PartialType(
  CreateStudentDto,
) {}
