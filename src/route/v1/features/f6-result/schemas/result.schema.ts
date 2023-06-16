import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Student } from '../../f2-student/schemas/student.schema';
import { Subject } from '../../f5-subject/schemas/subject.schema';

@Schema({ timestamps: true, versionKey: false })
export class Result {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  masv: Student;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' })
  maMH: Subject;

  @Prop({ type: Number })
  diemThi: Number;
}

export type ResultDocument = Result & Document;
export const ResultSchema = SchemaFactory.createForClass(Result);
