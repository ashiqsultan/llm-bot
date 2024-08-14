import { Request, Response, NextFunction } from "express";
import IAppRes from "../types/IAppRes";
import createArticleService from "../services/createArticle";
import createChunks from "../services/createChunks";
import { IArticle } from "../models/Article";

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    if (
      !title ||
      !content ||
      typeof title !== "string" ||
      typeof content !== "string"
    ) {
      const response: IAppRes = {
        data: "",
        isError: true,
        errMsg: "Title or content cannot be empty",
      };
      res.status(400).send(response);
      return;
    }
    const newArticle: IArticle = {
      title: title.trim(),
      content: content.trim(),
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
