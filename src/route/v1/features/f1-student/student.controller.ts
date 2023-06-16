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
import StudentService from './Student.service';
import UpdateStudentDto from './dto/update-student.dto';
import CreateStudentDto from './dto/create-student.dto';

@ApiTags('Student')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly studentService : StudentService,
  ) {}

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('')
  @HttpCode(200)
  async findAllStudent(@Query() query: any): Promise<any> {
    return this.studentService.findManyBy(query);
  }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('')
  @HttpCode(201)
  async createStudent(@Body() body: CreateStudentDto): Promise<any> {
    return this.studentService.create(body);
  }

  /**
   * create
   * @param body
   * @returns
   */

  /**
   * update
   * @param id
   * @param body
   * @returns
   */
  @Put(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @Body() body: UpdateStudentDto,
  ): Promise<any> {
    return this.studentService.updateOneById(id, body);
  }

  /**
   * update
   * @param id
   * @param body
   * @returns
   */

  /**
   * Delete hard many by ids
   * @param ids
   * @returns
   */
  @Delete(':ids/ids')
  // @HttpCode(204)
  async deleteManyByIds(@Param('ids') ids: string): Promise<any> {
    return this.studentService.deleteManyHardByIds(
      ids.split(',').map((item: any) => new Types.ObjectId(item)),
    );
  }

  /**
   * Delete
   * @param id
   * @returns
   */
  @Delete(':id')
  // @HttpCode(204)
  async delete(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
  ): Promise<any> {
    return this.studentService.deleteOneHardById(id);
  }

  /**
   * paginate
   * @param query
   * @returns
   */
  @Get('paginate')
  @HttpCode(200)
  async paginate(@ApiQueryParams() query: AqpDto): Promise<any> {
    return this.studentService.paginate(query); // return {results: [], limit, page, ....}
  }

  /**
   * findOneById
   * @param id
   * @returns
   */
  @Get(':id')
  @HttpCode(200)
  async findOneById(
    @Param('id', ParseObjectIdPipe) id: Types.ObjectId,
    @ApiQueryParams('population') populate: AqpDto,
  ): Promise<any> {
    const result = await this.studentService.findOneById(id, { populate });

    if (!result) throw new NotFoundException('The item does not exist');

    return result;
  }
}
