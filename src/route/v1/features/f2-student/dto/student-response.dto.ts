import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsMongoId, IsOptional } from 'class-validator';
// import CreateStudentDto from './create-student.dto';

export default class CreateSpecializeDto {
  readonly hoTen: string;

  readonly nu: string;

  readonly ngaySinh: Date;

  readonly maLop: string;

  readonly masv: string;

  readonly hocBong: number;

  readonly tinh: string;
}
