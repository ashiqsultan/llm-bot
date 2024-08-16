import semanticSearch from './semanticSearch';
import llm from '../utils/openai/llm';
import getArticlesByIds from './getArticlesByIds';
import { IArticleDocument } from '../models/Article';
import { IChunkDocument } from '../models/Chunk';

const chatService = async (
  userMsg: string
): Promise<{ reply: string; sources: any[] }> => {
  try {
    const context = await semanticSearch(userMsg);
    const articleIds = context.map((i) => i.articleId);
    const articleTitles = await getArticlesByIds(articleIds);
    async function aggregateContextByTitle(
      context: IChunkDocument[],
      articleTitles: IArticleDocument[]
    ): Promise<{ title: string; content: string }[]> {
      // Create a mapping of articleId to title
      const articleTitleMap: { [key: string]: string } = {};
      for (const article of articleTitles) {
        // @ts-ignore
        articleTitleMap[article._id.toString()] = article.title;
      }

      // Aggregate context data by articleId
      const aggregatedContextMap: { [key: string]: string[] } = {};
      for (const item of context) {
        const title = articleTitleMap[item.articleId];
        if (title) {
          if (!aggregatedContextMap[title]) {
            aggregatedContextMap[title] = [];
          }
          aggregatedContextMap[title].push(item.data);
        }
      }

      // Convert aggregated data into the desired format
      const updatedContextToGiveLLM: { title: string; content: string }[] = [];
      for (const title in aggregatedContextMap) {
        updatedContextToGiveLLM.push({
          title: title,
          content: aggregatedContextMap[title].join(' '),
        });
      }

      return updatedContextToGiveLLM;
    }

    const updatedContext = await aggregateContextByTitle(
      context,
      articleTitles
    );

    const llmRes = await llm(userMsg, JSON.stringify(updatedContext));
    if (llmRes.reply) {
      return { reply: llmRes.reply, sources: articleTitles };
    }
    throw 'Something went wrong';
  } catch (error) {
    throw error;
  }
};

export default chatService;
