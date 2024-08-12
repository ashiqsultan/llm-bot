import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import getArticlesService from '../services/getArticles';

const getAllArticles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allArticles = await getArticlesService();
    const response: IAppRes = { data: allArticles, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export default getAllArticles;
