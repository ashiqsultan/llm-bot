import OpenAI from "openai";
const openaiApiKey = process.env.OPENAI_API_KEY || "";
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function generateEmbedding(inputText: string): Promise<number[]> {
  try {
    const vectorEmbedding = await openai.embeddings.create({
      input: inputText,
      model: "text-embedding-ada-002",
    });
    const embedding = vectorEmbedding.data[0].embedding;
    // console.log("embedding");
    console.log(embedding);
    return embedding;
  } catch (error) {
    console.error(error);
    throw "Error generating embedding";
  }
}

export default generateEmbedding;
