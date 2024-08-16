# LLM Bot

Refer to README files inside the respective folders for backend and frontend development and deployment instruction.

This project demonstrates the use of Retrieval-Augmented Generation (RAG) with a large language model (LLM).

OpenAI APIs are used for llm and embedding model

## Database
MongoDB Atlas Vector search is used to store embeddings

Below is the Vector index configured on MongoDB atlas.
- The name of the index can be anything
- numDimensions should match size of the embedding model output array.
- For similarity refer MongoDB docs
```
{
  "fields": [
    {
      "numDimensions": 1536,
      "path": "embedding",
      "similarity": "dotProduct",
      "type": "vector"
    }
  ]
}
```

