import { PaginateModel, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

import BaseRepository from '@base-inherit/base.repository';
import { StudentDocument, student } from './schemas/student.schema';
import { ClassDocument, Class } from './schemas/class.schema';
import { FacultiesDocument, Faculties } from './schemas/faculties.schema';
import { SubjectDocument, Subject } from './schemas/subject.schema';
import { ResultDocument, Result } from './schemas/result.schema';

@Injectable()
export default class ClassStudentRepository extends BaseRepository<StudentDocument> {
  constructor(
    @InjectModel(student.name) model: PaginateModel<StudentDocument>,
    @InjectModel(student.name) private studentModel: Model<StudentDocument>,
    @InjectModel(Class.name) private classModel: Model<ClassDocument>,
    @InjectModel(Faculties.name) private facultiesModel: Model<FacultiesDocument>,
    @InjectModel(Subject.name) private subjectModel: Model<SubjectDocument>,
    @InjectModel(Result.name) private resultModel: Model<ResultDocument>,

  ) {
    super(model);
    this.classModel = classModel;
    this.studentModel = studentModel;
    this.facultiesModel = facultiesModel;
    this.subjectModel = subjectModel;
    this.resultModel = resultModel;
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
