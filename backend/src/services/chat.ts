import semanticSearch from "./semanticSearch";
import llm from "../utils/openai/llm";

const chatService = async (userMsg: string): Promise<string> => {
  try {
    const context = await semanticSearch(userMsg);
    const contextForLLM = context.map((i) => i.data);
    console.log({contextForLLM})
    const llmRes = await llm(userMsg, contextForLLM);
    if (llmRes.reply) {
      return llmRes.reply;
    }
    return "Something went wrong";
  } catch (error) {
    throw error;
  }
};

export default chatService;
