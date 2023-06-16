import {
  IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString,
} from 'class-validator';

export default class CreateSpecializeDto {
  @IsNotEmpty()
  @IsString()
  readonly hoTen: string;

  @IsNotEmpty()
  @IsString()
  readonly nu: string;

  @IsNotEmpty()
  readonly ngaySinh: Date;

  @IsNotEmpty()
  @IsString()
  readonly maLop: string;

  @IsNotEmpty()
  @IsString()
  readonly masv: string;

  @IsNotEmpty()
  @IsNumber()
  readonly hocBong: number;

  @IsNotEmpty()
  @IsString()
  readonly tinh: string;
}
