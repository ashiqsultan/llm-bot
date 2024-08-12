import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import getArticleByIdService from '../services/getArticleById';

const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    if (!id) {
      const response: IAppRes = {
        data: '',
        isError: true,
        errMsg: 'id cannot be empty',
      };
      res.status(400).send(response);
      return;
    }
    const article = await getArticleByIdService(req.params.id);
    const response: IAppRes = { data: article, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export default getArticleById;
