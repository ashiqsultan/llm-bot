import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const textSplitter = async (text: string): Promise<string[]> => {
  try {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 20,
      // Additional separators if necessary
      // separators: ["|", "##", ">", "-"],
    });
    const output = await splitter.splitText(text);
    console.log("textsplitter_output", output);
    return output;
  } catch (error) {
    throw error;
  }
};

export default textSplitter;
