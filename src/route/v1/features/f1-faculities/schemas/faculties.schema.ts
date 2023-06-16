import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Faculties {
  @Prop({ type: String })
  maKhoa: string;

  @Prop({ type: String })
  tenKhoa: string;

  @Prop({ type: String })
  soCBGD: string;
}

export type FacultiesDocument = Faculties & Document;
export const FacultiesSchema = SchemaFactory.createForClass(Faculties);
