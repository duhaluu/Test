import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Faculties } from './faculties.schema';

@Schema({ timestamps: true, versionKey: false })
export class Class {
  @Prop({ type: String })
  maLop: string;

  @Prop({ type: String })
  tenLop: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Faculties' })
  maKhoa: Faculties;
}

export type ClassDocument = Class & Document;
export const ClassSchema = SchemaFactory.createForClass(Class);
