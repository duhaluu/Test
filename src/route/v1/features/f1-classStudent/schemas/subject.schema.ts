import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Subject {
  @Prop({ type: String })
  maMH: string;

  @Prop({ type: String })
  tenMH: string;

  @Prop({ type: String })
  soTiet: string;
}

export type SubjectDocument = Subject & Document;
export const SubjectSchema = SchemaFactory.createForClass(Subject);
