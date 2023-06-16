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
import FacultiesService from './Faculties.service';
import CreateFacultiesDto from './dto/create-faculities.dto';

@ApiTags('')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly facultiesService : FacultiesService,
  ) {}

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('')
  @HttpCode(200)
  async findAllFaculties(@Query() query: any): Promise<any> {
    return this.facultiesService.findManyBy(query);
  }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('')
  @HttpCode(201)
  async createFaculties(@Body() body: CreateFacultiesDto): Promise<any> {
    return this.facultiesService.create(body);
  }
}
