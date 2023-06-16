import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ResultSchema, Result } from './schemas/result.schema';

import ResultController from './result.controller';
import ResultRepository from './Result.repository';
import ResultService from './Result.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Result.name,
        schema: ResultSchema,
      },
    ]),
  ],
  controllers: [ResultController],
  providers: [ResultService, ResultRepository],
  exports: [ResultService, ResultRepository, MongooseModule],
})
export default class ResultModule {}
