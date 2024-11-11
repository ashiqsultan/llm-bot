import semanticSearch from './semanticSearch';
import llm from '../utils/gemini/llm';
import { IChunkDocument } from '../models/Chunk';

const chatService = async (
  userMsg: string
): Promise<{ reply: string; sources: any[] }> => {
  try {
    const context = await semanticSearch(userMsg);

    interface AggregatedContext {
      title: string;
      content: string;
    }

    function aggregateContextByTitle(
      context: IChunkDocument[]
    ): AggregatedContext[] {
      const aggregatedMap = new Map<string, string>();

      for (const item of context) {
        const { articleTitle, data } = item;
        if (aggregatedMap.has(articleTitle)) {
          aggregatedMap.set(
            articleTitle,
            aggregatedMap.get(articleTitle) + ' ' + data.trim()
          );
        } else {
          aggregatedMap.set(articleTitle, data.trim());
        }
      }

      return Array.from(aggregatedMap).map(([title, content]) => ({
        title,
        content,
      }));
    }

    const updatedContext = aggregateContextByTitle(context);

    function aggregateSources(context: IChunkDocument[]): Array<{
      _id: string;
      title: string;
    }> {
      const sourceMap = new Map<string, { _id: string; title: string }>();
      for (const item of context) {
        const { articleId, articleTitle } = item;
        if (!sourceMap.has(articleId)) {
          sourceMap.set(articleId, {
            _id: articleId,
            title: articleTitle || '',
          });
        }
      }
      return Array.from(sourceMap.values());
    }

    const aggregateContextSources = aggregateSources(context);

    const llmRes = await llm(userMsg, JSON.stringify(updatedContext));

    if (llmRes.reply) {
      return { reply: llmRes.reply, sources: aggregateContextSources };
    }
    throw 'Something went wrong';
  } catch (error) {
    throw error;
  }
};

export default chatService;
