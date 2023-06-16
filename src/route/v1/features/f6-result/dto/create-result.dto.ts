import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateSpecializeDto {
  @IsNotEmpty()
  @IsString()
  readonly masv: string;

  @IsNotEmpty()
  @IsString()
  readonly maMH: string;

  @IsNotEmpty()
  @IsString()
  readonly diemThi: number;
}
