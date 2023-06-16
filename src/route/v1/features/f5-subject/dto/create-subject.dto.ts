import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CreateSpecializeDto {
  @IsNotEmpty()
  @IsString()
  readonly maMH: string;

  @IsNotEmpty()
  @IsString()
  readonly tenMH: string;

  @IsNotEmpty()
  @IsString()
  readonly soTiet: string;
}
