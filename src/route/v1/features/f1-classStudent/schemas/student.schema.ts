import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Class } from './class.schema';

@Schema({ timestamps: true, versionKey: false })
export class student {
  @Prop({ type: String })
  hoTen: string;

  @Prop({ type: String })
  nu: string;

  @Prop({ type: Date })
  ngaySinh: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Class' })
  maLop: Class;

  @Prop({ type: String })
  masv: string;

  @Prop({ type: Number })
  hocBong: number;

  @Prop({ type: String })
  tinh: string;
}

export type StudentDocument = student & Document;
export const StudentSchema = SchemaFactory.createForClass(student);
