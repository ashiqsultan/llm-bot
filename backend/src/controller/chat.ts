import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import chatService from '../services/chat';

const chatcontroller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userMsg: string = req?.body?.msg || '';
    if (!userMsg) {
      throw 'user message cannot be empty';
    }
    const llmRes = await chatService(userMsg);

    const response: IAppRes = { data: llmRes, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export default chatcontroller;
