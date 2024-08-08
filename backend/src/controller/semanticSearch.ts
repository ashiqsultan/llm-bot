import { Request, Response, NextFunction } from "express";
import IAppRes from "../types/IAppRes";
import semanticSearchService from "../services/semanticSearch";

const semanticSearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { searchText } = req.body;
    if (!searchText || typeof searchText !== "string") {
      const response: IAppRes = {
        data: "",
        isError: true,
        errMsg: "Data cannot be empty",
      };
      res.status(400).send(response);
      return;
    }
    const document = await semanticSearchService(searchText);
    const result: IAppRes = {
      data: document,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default semanticSearch;
