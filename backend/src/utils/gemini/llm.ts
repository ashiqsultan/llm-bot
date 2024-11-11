import { GoogleGenerativeAI } from '@google/generative-ai';

async function main(userMessage: string, context: string) {
  // Initialize the Google AI client
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

  // Construct the prompt
  const systemPrompt = `You are an helpful assistant to respond to user messages using the context array.
    Answer to the user question only using the provided context as knowledge.
    If the question is outside the given context then apologize to the user that you dont have any information regarding the question.
    Context: ${context}
    Your response must be a JSON object 
    Output JSON format: {reply:""}`;

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash-8b',
    systemInstruction: systemPrompt,
    generationConfig: {
      responseMimeType: 'application/json',
    },
  });
  const prompt = userMessage;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // Ensure the response is valid JSON
    try {
      const jsonResponse = JSON.parse(text);
      return jsonResponse;
    } catch (jsonError) {
      // If the model didn't return valid JSON, wrap the response in the required format
      return {
        reply: text,
      };
    }
  } catch (error) {
    console.error('Error generating response:', error);
    return {
      reply: 'Sorry, there was an error processing your request.',
    };
  }
}

export default main;
