import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SubjectSchema, Subject } from './schemas/subject.schema';

import SubjectController from './subject.controller';
import SubjectRepository from './Subject.repository';
import SubjectService from './Subject.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Subject.name,
        schema: SubjectSchema,
      },
    ]),
  ],
  controllers: [SubjectController],
  providers: [SubjectService, SubjectRepository,
  ],
  exports: [SubjectService, SubjectRepository, MongooseModule],
})
export default class SubjectModule {}
