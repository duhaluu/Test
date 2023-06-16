import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClassSchema, Class } from './schemas/class.schema';

import ClassController from './class.controller';
import ClassService from './Class.service';
import ClassRepository from './Class.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Class.name,
        schema: ClassSchema,
      },
    ]),
  ],
  controllers: [ClassController],
  providers: [ClassService, ClassRepository],
  exports: [ClassService, ClassRepository, MongooseModule],
})
export default class ClassModule {}
