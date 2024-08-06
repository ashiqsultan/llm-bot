import { Request, Response, NextFunction } from "express";
import IAppRes from "../types/IAppRes";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: IAppRes = { data: "pong", isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
