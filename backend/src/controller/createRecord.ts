import { Request, Response, NextFunction } from "express";
import IAppRes from "../types/IAppRes";
import createRecordService from "../services/createRecord";
import { IRecord } from "../models/Record";

const createRecord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body;
    if (!data || typeof data !== "string") {
      const response: IAppRes = {
        data: "",
        isError: true,
        errMsg: "Data cannot be empty",
      };
      res.status(400).send(response);
      return;
    }
    const document = await createRecordService(data);
    const result: IAppRes = {
      data: document,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default createRecord;
