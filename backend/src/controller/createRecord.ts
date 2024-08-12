import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import createRecordService from '../services/createRecord';
import createArticleService from '../services/createArticle';
import { IRecord } from '../models/Record';
import { IArticle } from '../models/Article';

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, data } = req.body;
    if (!data || typeof data !== 'string') {
      const response: IAppRes = {
        data: '',
        isError: true,
        errMsg: 'Data cannot be empty',
      };
      res.status(400).send(response);
      return;
    }
    const newArticle: IArticle = {
      title,
      content: data,
    };
    await createArticleService(newArticle);
    await createRecordService(data);
    const result: IAppRes = {
      data: 'Article Created',
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default createRecord;
