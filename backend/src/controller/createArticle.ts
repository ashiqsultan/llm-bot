import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import createArticleService from '../services/createArticle';
import createChunks from '../services/createChunks';
import { IArticle } from '../models/Article';

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, data } = req.body;
    if (!title || !data || typeof data !== 'string') {
      const response: IAppRes = {
        data: '',
        isError: true,
        errMsg: 'Title or data cannot be empty',
      };
      res.status(400).send(response);
      return;
    }
    const newArticle: IArticle = {
      title,
      content: data,
    };
    const article = await createArticleService(newArticle);
    await createChunks(article);
    const result: IAppRes = {
      data: article,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default createArticle;
