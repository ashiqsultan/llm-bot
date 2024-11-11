import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function generateEmbedding(inputText: string): Promise<number[]> {
  try {
    // For embeddings, use the Text Embeddings model
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });
    const text = inputText;
    const result = await model.embedContent(text);
    const embedding = result.embedding;
    return embedding.values;
  } catch (error) {
    console.error(error);
    throw 'Error generating embedding';
  }
}

export default generateEmbedding;
