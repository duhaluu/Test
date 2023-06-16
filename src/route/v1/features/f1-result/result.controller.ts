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
import ResultService from './Result.service';
import CreateResultDt0 from './dto/create-result.dto';

@ApiTags('')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly resultService : ResultService,
  ) {}

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('')
    @HttpCode(200)
  async findAllResult(@Query() query: any): Promise<any> {
    return this.resultService.findManyBy(query);
  }

   /**
   * create
   * @param body
   * @returns
   */
   @Post('')
   @HttpCode(201)
    async createResult(@Body() body: CreateResultDt0): Promise<any> {
      return this.resultService.create(body);
    }
}
