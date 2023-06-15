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
import ClassService from './Class.service';
import FacultiesService from './Faculties.service';
import SubjectService from './Subject.service';
import ResultService from './Result.service';
import UpdateStudentDto from './dto/update-student.dto';
import CreateStudentDto from './dto/create-student.dto';
import CreateClassDto from './dto/create-class.dto';
import UpdateClassDto from './dto/update-class.dto';
import CreateFacultiesDto from './dto/create-faculities.dto';
import CreateSubjectDto from './dto/create-subject.dto';
import CreateResultDt0 from './dto/create-result.dto';

@ApiTags('')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export default class classStudentController {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private readonly studentService : StudentService,
    private readonly classService : ClassService,
    private readonly facultiesService : FacultiesService,
    private readonly subjectService : SubjectService,
    private readonly resultService : ResultService,
  ) {}

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('sinh-viens')
  @HttpCode(200)
  async findAllStudent(@Query() query: any): Promise<any> {
    return this.studentService.findManyBy(query);
  }

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('lops')
   @HttpCode(200)
  async findAllClass(@Query() query: any): Promise<any> {
    return this.classService.findManyBy(query);
  }

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('khoas')
  @HttpCode(200)
   async findAllFaculties(@Query() query: any): Promise<any> {
     return this.facultiesService.findManyBy(query);
   }

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('mon-hocs')
   @HttpCode(200)
  async findAllSubject(@Query() query: any): Promise<any> {
    return this.subjectService.findManyBy(query);
  }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('ket-quas')
    @HttpCode(200)
   async findAllResult(@Query() query: any): Promise<any> {
     return this.resultService.findManyBy(query);
   }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('sinh-viens')
  @HttpCode(201)
    async createStudent(@Body() body: CreateStudentDto): Promise<any> {
      return this.studentService.create(body);
    }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('lops')
  @HttpCode(201)
  async createClass(@Body() body: CreateClassDto): Promise<any> {
    return this.classService.create(body);
  }

  /**
   * create
   * @param body
   * @returns
   */
  @Post('khoas')
  @HttpCode(201)
  async createFaculties(@Body() body: CreateFacultiesDto): Promise<any> {
    return this.facultiesService.create(body);
  }

   /**
   * create
   * @param body
   * @returns
   */
   @Post('mon-hocs')
   @HttpCode(201)
  async createSubject(@Body() body: CreateSubjectDto): Promise<any> {
    return this.subjectService.create(body);
  }

   /**
   * create
   * @param body
   * @returns
   */
   @Post('ket-quas')
   @HttpCode(201)
   async createResult(@Body() body: CreateResultDt0): Promise<any> {
     return this.resultService.create(body);
   }

  /**
   * update
   * @param id
   * @param body
   * @returns
   */
  @Put('sinh-viens/:id')
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
   @Put('lops/:id')
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
  @Delete('sinh-viens/:ids')
  // @HttpCode(204)
   async deleteManyByIds(@Param('ids') ids: string): Promise<any> {
     return this.studentService.deleteManyHardByIds(
       ids.split(',').map((item: any) => new Types.ObjectId(item)),
     );
   }

  /**
   * Delete hard many by ids
   * @param ids
   * @returns
   */
  @Delete('lop/:ids')
  // @HttpCode(204)
  async deleteClassManyByIds(@Param('ids') ids: string): Promise<any> {
    return this.classService.deleteManyHardByIds(
      ids.split(',').map((item: any) => new Types.ObjectId(item)),
    );
  }

  /**
   * Delete
   * @param id
   * @returns
   */
  @Delete('sinh-viens/:id')
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
  @Get('sinh-viens/:id')
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
