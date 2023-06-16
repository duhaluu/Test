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
import ClassService from './Class.service';
import CreateClassDto from './dto/create-class.dto';
import UpdateClassDto from './dto/update-class.dto';

@ApiTags('Class')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly classService : ClassService,
  ) {}

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('')
   @HttpCode(200)
  async findAllClass(@Query() query: any): Promise<any> {
    return this.classService.findManyBy(query);
  }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('')
  @HttpCode(201)
   async createClass(@Body() body: CreateClassDto): Promise<any> {
     return this.classService.create(body);
   }

   /**
   * update
   * @param id
   * @param body
   * @returns
   */
   @Put(':id')
   @HttpCode(200)
  async updateClass(
     @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
     @Body() body: UpdateClassDto,
  ): Promise<any> {
    return this.classService.updateOneById(id, body);
  }

  /**
   * Delete hard many by ids
   * @param ids
   * @returns
   */
  @Delete(':ids/ids')
  // @HttpCode(204)
   async deleteClassManyByIds(@Param('ids') ids: string): Promise<any> {
     return this.classService.deleteManyHardByIds(
       ids.split(',').map((item: any) => new Types.ObjectId(item)),
     );
   }
}
