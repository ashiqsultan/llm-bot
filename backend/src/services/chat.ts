import semanticSearch from './semanticSearch';
import llm from '../utils/openai/llm';
import getArticlesByIds from './getArticlesByIds';

const chatService = async (
  userMsg: string
): Promise<{ reply: string; sources: any[] }> => {
  try {
    const context = await semanticSearch(userMsg);
    const contextForLLM = context.map((i) => i.data);
    const articleIds = context.map((i) => i.articleId);
    const articleTitles = await getArticlesByIds(articleIds);
    const llmRes = await llm(userMsg, contextForLLM);
    if (llmRes.reply) {
      return { reply: llmRes.reply, sources: articleTitles };
    }
    throw 'Something went wrong';
  } catch (error) {
    throw error;
  }
};

export default chatService;
