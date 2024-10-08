import OpenAI from "openai";

const openaiApiKey = process.env.OPENAI_API_KEY || "";
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

async function main(userMessage: string, context: string): Promise<any> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an helpful assistant to respond to user messages using the context array.
        Answer to the user question only using the provided context as knowledge.
        If the question is outside the given context then apologize to the user that you dont have any information regarding the question.
        Context: ${context}
        The output must be in JSON.
        Output JSON Format: {reply:""}`,
      },
      { role: "user", content: userMessage },
    ],
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
  });
  // console.log({ chatmsg: completion.choices[0].message });
  // @ts-ignore
  const outputJson = JSON.parse(completion.choices[0].message.content);
  return outputJson;
}

export default main;
