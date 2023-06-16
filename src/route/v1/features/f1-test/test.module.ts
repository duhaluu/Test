import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import StudentModule from '@features/f1-student/student.module';
import ClassModule from '@features/f1-class/class.module';
import FacultiesModule from '@features/f1-faculities/faculities.module';
import SubjectModule from '@features/f1-subject/subject.module';
import ResultModule from '@features/f1-result/result.module';

import TestController from './test.controller';
import TestService from './Test.service';
import TestRepository from './Test.repository';

@Module({
  imports: [
    StudentModule, ClassModule, FacultiesModule, SubjectModule, ResultModule,
  ],
  controllers: [TestController],
  providers: [TestService, TestRepository, ResultModule, ClassModule],
  exports: [TestService, TestRepository],
})
export default class TestModule {}
