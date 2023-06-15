import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateSpecializeDto {
  @IsNotEmpty()
  @IsString()
  readonly maKhoa: string;

  @IsNotEmpty()
  @IsString()
  readonly tenKhoa: string;

  @IsNotEmpty()
  @IsString()
  readonly soCBGD: string;
}
