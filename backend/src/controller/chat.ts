import { Request, Response, NextFunction } from "express";
import IAppRes from "../types/IAppRes";
import llm from "../utils/openai/llm";

const chatcontroller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userMsg: string = req?.body?.msg || "";
    if (!userMsg) {
      throw "user message cannot be empty";
    }
    const llmRes = await llm(userMsg);
    if (llmRes.reply) {
      const response: IAppRes = { data: llmRes, isError: false };
      res.send(response);
    }
    const llmerrRes: IAppRes = { data: "", isError: true, errMsg: "LLM error" };
    res.send(llmerrRes);
    // const response: IAppRes = { data: "chat message", isError: false };
  } catch (error) {
    next(error);
  }
};

export default chatcontroller;
