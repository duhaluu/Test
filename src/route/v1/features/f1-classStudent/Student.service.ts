import { Injectable } from '@nestjs/common';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';
import * as lodash from 'lodash';

import { student, StudentDocument } from './schemas/student.schema';
import StudentRepository from './Student.repository';
import ClassRepository from './Class.repository';
import ResultRepository from './Result.repository';
import { Class } from './schemas/class.schema';

@Injectable()
export default class StudentService extends BaseService<StudentDocument> {
  constructor(
    readonly logger: CustomLoggerService,
    readonly studentRepository: StudentRepository,
    readonly classRepository : ClassRepository,
    readonly resultRepository: ResultRepository,

  ) {
    super(logger, studentRepository);
  }

  async exam1(query : any): Promise<any> {
    const customQuery = {
      filter: query,
    };
    return this.classRepository.findManyBy(customQuery);
  }

  async exam2(): Promise<any> {
    const customQuery = {
      projection: {
        masv: 1,
        hocBong: 1,
        hoTen: 1,
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam3(): Promise<any> {
    const customQuery = {
      filter: { hocBong: { $gt: 0 } },
      projection: {
        masv: 1,
        hocBong: 1,
        nu: 1,
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam4(): Promise<any> {
    const customQuery = {
      filter: { nu: 'Yes' },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam5(): Promise<any> {
    const customQuery = {
      filter: {
        hoTen: { $regex: '.*Trần.*' },
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam6(): Promise<any> {
    const customQuery = {
      filter: {
        nu: 'Yes',
        hocBong: { $gt: 0 },
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam7(): Promise<any> {
    const customQuery = {
      filter: { $or: [{ nu: 'Yes' }, { hocBong: { $gt: 0 } }] },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam8(): Promise<any> {
    const customQuery = {
      filter: {
        $and: [{ ngaySinh: { $gte: '1978-07-08T17:00:00.000Z' } }, { ngaySinh: { $lte: '1985-07-08T17:00:00.000Z' } }],
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam9(): Promise<any> {
    const customQuery = {
      sort: {
        masv: 1,
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam10(): Promise<any> {
    const customQuery = {
      sort: {
        hocBong: -1,
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam11(): Promise<any> {
    const customQuery = {
      filter: {
        $and: [{ maMH: '64898c93b1fe9ba149d5c192' }, { diemThi: { $gte: 8 } }],
      },
      projection: {
        masv: 1,
      },
    };
    let Results = await this.resultRepository.findManyBy(customQuery);
    Results = lodash.map(Results, (result) => result.masv);
    const Student = await this.studentRepository.findManyBy({
      filter: {
        _id: {
          $in: Results,
        },
      },
    });
    return Student;
  }

  async exam12(): Promise<any> {
    return this.studentRepository.exam12();
  }

  async exam13(): Promise<any> {
    return this.studentRepository.exam13();
  }

  async exam14(): Promise<any> {
    return this.studentRepository.exam14();
  }

  async exam15(): Promise<any> {
    return this.studentRepository.exam15();
  }

  async exam16(): Promise<any> {
    return this.studentRepository.exam16();
  }

  async exam17(): Promise<any> {
    return this.studentRepository.exam17();
  }

  async exam18(): Promise<any> {
    return this.studentRepository.exam18();
  }

  async exam19(): Promise<any> {
    return this.studentRepository.exam19();
  }

  async exam20(): Promise<any> {
    return this.studentRepository.exam20();
  }

  async exam21(): Promise<any> {
    return this.studentRepository.exam21();
  }

  async exam22(): Promise<any> {
    const customQuery = {
      sort: {
        hocBong: -1,
      },
    };
    return this.studentRepository.findManyBy(customQuery);
  }

  async exam23(): Promise<any> {
    return this.studentRepository.exam23();
  }

  async exam24(): Promise<any> {
    const customQuery = {
      filter: {
        maMH: { $nin: ['64898c93b1fe9ba149d5c192'] },
      },
      projection: {
        masv: 1,
      },
    };
    let results = await this.resultRepository.findManyBy(customQuery);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    results = lodash.map(results, (result) => result.masv);
    const Student = await this.resultRepository.findManyBy({
      filter: {
        _id: {
          $in: results,
        },
      },
    });
    return Student;
  }

  async exam25(): Promise<any> {
    return this.studentRepository.exam25();
  }
}
