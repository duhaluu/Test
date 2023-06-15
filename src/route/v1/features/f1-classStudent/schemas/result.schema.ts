import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { student } from './student.schema';
import { Subject } from './subject.schema';

@Schema({ timestamps: true, versionKey: false })
export class Result {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'student' })
  masv: student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  maMH: Subject;

  @Prop({ type: Number })
  diemThi: Number;
}

export type ResultDocument = Result & Document;
export const ResultSchema = SchemaFactory.createForClass(Result);
