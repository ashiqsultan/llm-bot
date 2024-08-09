import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const textSplitter = async (text: string) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 50,
    chunkOverlap: 5,
    // Additional separators if necessary
    // separators: ["|", "##", ">", "-"],
  });
  const output = await splitter.splitText(text);
  console.log("textsplitter_output", output);
  return output;
};

export default textSplitter;
