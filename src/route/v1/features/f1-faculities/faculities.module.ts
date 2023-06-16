import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FacultiesSchema, Faculties } from './schemas/faculties.schema';

import FaculitiestController from './faculities.controller';
import FacultiesService from './Faculties.service';
import FacultiesRepository from './Faculties.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Faculties.name,
        schema: FacultiesSchema,
      },
    ]),
  ],
  controllers: [FaculitiestController],
  providers: [FacultiesService, FacultiesRepository],
  exports: [FacultiesService, FacultiesRepository, MongooseModule],
})
export default class FacultiesModule {}
