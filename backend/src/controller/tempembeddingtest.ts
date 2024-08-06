import { Request, Response, NextFunction } from "express";
import generateEmbedding from "../utils/openai/generateEmbedding";

const tempembeddingtest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userMsg: string = req?.body?.msg || "";
    if (!userMsg) {
      throw "user message cannot be empty";
    }
    const embeddingRes = await generateEmbedding(userMsg);
    res.send(embeddingRes);
  } catch (error) {
    next(error);
  }
};

export default tempembeddingtest;
