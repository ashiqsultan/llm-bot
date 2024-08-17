import { Request, Response, NextFunction } from 'express';
import IAppRes from '../types/IAppRes';
import chatService from '../services/chat';

const chatcontroller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const temoraryResponse: IAppRes = {
      data: {
        reply:
          'Dirt Rally 2.0 is a racing simulation video game developed and published by Codemasters, focusing on rallying and rallycross. It features realistic driving physics and includes stage events in various locations such as Argentina, Australia, New Zealand, Poland, Spain, Finland, Germany, Greece, Monte Carlo, Sweden, and Wales. The game was released on 26 February 2019 for platforms including PlayStation 4, Windows, and Xbox One, with a version for Amazon Luna released on 3 June 2021.',
        sources: [
          {
            _id: '66bf4693012c9d34ab22650b',
            title: 'Dirt 2.0 Game',
          },
          {
            _id: '66bf4a53bad600467464a74c',
            title: 'Red Dead Redemption 2',
          },
        ],
      },
      isError: false,
    };
    // set timeout
    setTimeout(() => {
      console.log("this is inside setTimeout")
      res.send(temoraryResponse);
    }, 1000);

    console.log("this will be before setTimeout")
    // const userMsg: string = req?.body?.msg || '';
    // if (!userMsg) {
    //   throw 'user message cannot be empty';
    // }
    // const llmRes = await chatService(userMsg);

    // const response: IAppRes = { data: llmRes, isError: false };
    // res.send(response);
  } catch (error) {
    next(error);
  }
};

export default chatcontroller;
