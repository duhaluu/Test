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
export default class TestController {
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
  @Get('cau-1')
  @HttpCode(200)
  async cau1(@Query() query: any): Promise<any> {
    return this.studentService.exam1(query);
  }

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('cau-2')
   @HttpCode(200)
  async cau2(@Query() query: any): Promise<any> {
    return this.studentService.exam2();
  }

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('cau-3')
  @HttpCode(200)
   async cau3(@Query() query: any): Promise<any> {
     return this.studentService.exam3();
   }

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('cau-4')
  @HttpCode(200)
  async cau4(@Query() query: any): Promise<any> {
    return this.studentService.exam4();
  }

  /**
   * findAll
   * @param query
   * @returns
   */
  @Get('cau-5')
  @HttpCode(200)
  async cau5(@Query() query: any): Promise<any> {
    return this.studentService.exam5();
  }

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('cau-6')
   @HttpCode(200)
  async cau6(@Query() query: any): Promise<any> {
    return this.studentService.exam6();
  }

   /**
   * findAll
   * @param query
   * @returns
   */
   @Get('cau-7')
   @HttpCode(200)
   async cau7(@Query() query: any): Promise<any> {
     return this.studentService.exam7();
   }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-8')
    @HttpCode(200)
   async cau8(@Query() query: any): Promise<any> {
     return this.studentService.exam8();
   }

     /**
   * findAll
   * @param query
   * @returns
   */
     @Get('cau-9')
     @HttpCode(200)
    async cau9(@Query() query: any): Promise<any> {
      return this.studentService.exam9();
    }

     /**
   * findAll
   * @param query
   * @returns
   */
     @Get('cau-10')
     @HttpCode(200)
     async cau10(@Query() query: any): Promise<any> {
       return this.studentService.exam10();
     }

     /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-11')
    @HttpCode(200)
     async cau11(@Query() query: any): Promise<any> {
       return this.studentService.exam11();
     }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-12')
    @HttpCode(200)
    async cau12(@Query() query: any): Promise<any> {
      return this.studentService.exam12();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-13')
    @HttpCode(200)
    async cau13(@Query() query: any): Promise<any> {
      return this.studentService.exam13();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-14')
    @HttpCode(200)

    async cau14(@Query() query: any): Promise<any> {
      return this.studentService.exam14();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-15')
    @HttpCode(200)
    async cau15(@Query() query: any): Promise<any> {
      return this.studentService.exam15();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-16')
    @HttpCode(200)
    async cau16(@Query() query: any): Promise<any> {
      return this.studentService.exam16();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-17')
    @HttpCode(200)
    async cau17(@Query() query: any): Promise<any> {
      return this.studentService.exam17();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-18')
    @HttpCode(200)
    async cau18(@Query() query: any): Promise<any> {
      return this.studentService.exam18();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-19')
    @HttpCode(200)
    async cau19(@Query() query: any): Promise<any> {
      return this.studentService.exam19();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-20')
    @HttpCode(200)
    async cau20(@Query() query: any): Promise<any> {
      return this.studentService.exam20();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-21')
    @HttpCode(200)
    async cau21(@Query() query: any): Promise<any> {
      return this.studentService.exam21();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-22')
    @HttpCode(200)
    async cau22(@Query() query: any): Promise<any> {
      return this.studentService.exam2();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-23')
    @HttpCode(200)
    async cau23(@Query() query: any): Promise<any> {
      return this.studentService.exam23();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-24')
    @HttpCode(200)
    async cau24(@Query() query: any): Promise<any> {
      return this.studentService.exam24();
    }

    /**
   * findAll
   * @param query
   * @returns
   */
    @Get('cau-25')
    @HttpCode(200)
    async cau25(@Query() query: any): Promise<any> {
      return this.studentService.exam25();
    }
}
