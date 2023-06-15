import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateSpecializeDto {
  @IsNotEmpty()
  @IsString()
  readonly maLop: string;

  @IsNotEmpty()
  @IsString()
  readonly tenLop: string;

  @IsNotEmpty()
  @IsString()
  readonly maKhoa: string;
}
