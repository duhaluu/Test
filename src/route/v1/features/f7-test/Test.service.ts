import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CustomLoggerService from '@lazy-module/logger/logger.service';
import BaseService from '@base-inherit/base.service';
import * as mongoose from 'mongoose';
import * as lodash from 'lodash';

import { StudentDocument, Student } from '@features/f2-student/schemas/student.schema';
import { ClassDocument, Class } from '@features/f3-class/schemas/class.schema';
import { FacultiesDocument, Faculties } from '@features/f4-faculities/schemas/faculties.schema';
import { SubjectDocument, Subject } from '@features/f5-subject/schemas/subject.schema';
import { ResultDocument, Result } from '@features/f6-result/schemas/result.schema';
import ClassRepository from '@features/f3-class/Class.repository';
import ResultRepository from '@features/f6-result/Result.repository';
import TestRepository from './Test.repository';

@Injectable()
export default class TestService {
  constructor(
    @InjectModel(Student.name) private studentModel: mongoose.Model<StudentDocument>,
    @InjectModel(Class.name) private classModel: mongoose.Model<ClassDocument>,
    @InjectModel(Faculties.name) private facultiesModel: mongoose.Model<FacultiesDocument>,
    @InjectModel(Subject.name) private subjectModel: mongoose.Model<SubjectDocument>,
    @InjectModel(Result.name) private resultModel: mongoose.Model<ResultDocument>,
    readonly logger: CustomLoggerService,
    readonly testRepository: TestRepository,
    readonly classRepository : ClassRepository,
    readonly resultRepository: ResultRepository,

  ) {
    this.classModel = classModel;
    this.studentModel = studentModel;
    this.facultiesModel = facultiesModel;
    this.subjectModel = subjectModel;
    this.resultModel = resultModel;
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
    return this.testRepository.findManyBy(customQuery);
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
    return this.testRepository.findManyBy(customQuery);
  }

  async exam4(): Promise<any> {
    const customQuery = {
      filter: { nu: 'Yes' },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam5(): Promise<any> {
    const customQuery = {
      filter: {
        hoTen: { $regex: '.*Trần.*' },
      },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam6(): Promise<any> {
    const customQuery = {
      filter: {
        nu: 'Yes',
        hocBong: { $gt: 0 },
      },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam7(): Promise<any> {
    const customQuery = {
      filter: { $or: [{ nu: 'Yes' }, { hocBong: { $gt: 0 } }] },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam8(): Promise<any> {
    const customQuery = {
      filter: {
        $and: [{ ngaySinh: { $gte: '1978-07-08T17:00:00.000Z' } }, { ngaySinh: { $lte: '1985-07-08T17:00:00.000Z' } }],
      },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam9(): Promise<any> {
    const customQuery = {
      sort: {
        masv: 1,
      },
    };
    return this.testRepository.findManyBy(customQuery);
  }

  async exam10(): Promise<any> {
    const customQuery = {
      sort: {
        hocBong: -1,
      },
    };
    return this.testRepository.findManyBy(customQuery);
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
    const student = await this.testRepository.findManyBy({
      filter: {
        _id: {
          $in: Results,
        },
      },
    });
    return student;
  }

  async exam12(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      { $project: { lop: 0 } },
      {
        $match: {
          $and: [{ hocBong: { $gt: 0 } }, { maKhoa: new mongoose.Types.ObjectId('648972965726a4c2d4e22577') }],
        },
      },
      {
        $project: {
          _id: 1, hoTen: 1, hocBong: 1, tenLop: 1,
        },
      },
    ]);
  }

  async exam13(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      { $project: { lop: 0 } },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      { $project: { khoa: 0 } },
      {
        $match: {
          $and: [{ hocBong: { $gt: 0 } }, { maKhoa: new mongoose.Types.ObjectId('648972965726a4c2d4e22577') }],
        },
      },
      {
        $project: {
          _id: 1, hoTen: 1, hocBong: 1, tenLop: 1, tenKhoa: 1,
        },
      },
    ]);
  }

  async exam14(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $group: { _id: '$maLop', soSV: { $sum: 1 } },
      },
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: '_id',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $project: { _id: 1, tenLop: 1, soSV: 1 },
      },
    ]);
  }

  async exam15(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, sosv: { $sum: 1 } },
      },
    ]);
  }

  async exam16(): Promise<any[]> {
    return this.studentModel.aggregate([
      { $match: { nu: 'Yes' } },
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, sosv: { $sum: 1 } },
      },
    ]);
  }

  async exam17(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maLop', tenLop: { $first: '$tenLop' }, hocBong: { $sum: '$hocBong' } },
      },
    ]);
  }

  async exam18(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, hocBong: { $sum: '$hocBong' } },
      },
    ]);
  }

  async exam19(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, sosv: { $sum: 1 } },
      },
      {
        $match: {
          sosv: { $gt: 100 },
        },
      },
    ]);
  }

  async exam20(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $match: { nu: 'Yes' },
      },
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, sosv: { $sum: 1 } },
      },
      {
        $match: {
          sosv: { $gt: 50 },
        },
      },
    ]);
  }

  async exam21(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maLop', tenKhoa: { $first: '$tenKhoa' }, hocBong: { $sum: '$hocBong' } },
      },
      {
        $match: { hocBong: { $gte: 1000000 } },
      },
    ]);
  }

  async exam22(): Promise<any> {
    const customQuery = {
      sort: {
        hocBong: -1,
      },
    };
    return lodash.head(await this.testRepository.findManyBy(customQuery));
  }

  async exam23(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.resultModel.collection.name,
          localField: '_id',
          foreignField: 'masv',
          as: 'diemThi',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$diemThi', 0] }, '$$ROOT'] } },
      },
      {
        $project: { ketQua: 0 },
      },
      {
        $match: { maMH: new mongoose.Types.ObjectId('64898c93b1fe9ba149d5c192') },
      },
      {
        $sort: { diemThi: -1 },
      },
      {
        $limit: 1,
      },
    ]);
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
    const student = await this.resultRepository.findManyBy({
      filter: {
        _id: {
          $in: results,
        },
      },
    });
    return student;
  }

  async exam25(): Promise<any[]> {
    return this.studentModel.aggregate([
      {
        $lookup: {
          from: this.classModel.collection.name,
          localField: 'maLop',
          foreignField: '_id',
          as: 'lop',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$lop', 0] }, '$$ROOT'] } },
      },
      {
        $lookup: {
          from: this.facultiesModel.collection.name,
          localField: 'maKhoa',
          foreignField: '_id',
          as: 'khoa',
        },
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ['$khoa', 0] }, '$$ROOT'] } },
      },
      {
        $group: { _id: '$maKhoa', tenKhoa: { $first: '$tenKhoa' }, sosv: { $sum: 1 } },
      },
      {
        $sort: { soSV: -1 },
      },
      {
        $limit: 1,
      },
    ]);
  }
}
