import { Types } from 'mongoose';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import WrapResponseInterceptor from '@interceptor/wrap-response.interceptor';
import ParseObjectIdPipe from '@pipe/parse-object-id.pipe';
import { ApiQueryParams } from '@decorator/api-query-params.decorator';
import AqpDto from '@interceptor/aqp/aqp.dto';
import { ApiTags } from '@nestjs/swagger';
import SubjectService from './Subject.service';
import CreateSubjectDto from './dto/create-subject.dto';

@ApiTags('')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly subjectService : SubjectService,

  ) {}

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('')
   @HttpCode(200)
  async findAllSubject(@Query() query: any): Promise<any> {
    return this.subjectService.findManyBy(query);
  }

   /**
   * create
   * @param body
   * @returns
   */
   @Post('')
   @HttpCode(201)
   async createSubject(@Body() body: CreateSubjectDto): Promise<any> {
     return this.subjectService.create(body);
   }
}
