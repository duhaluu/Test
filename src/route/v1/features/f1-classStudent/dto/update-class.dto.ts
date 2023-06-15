import { PartialType } from '@nestjs/mapped-types';
import UpdateClassDto from './create-class.dto';

export default class UpdateClasstDto extends PartialType(
  UpdateClassDto,
) {}
