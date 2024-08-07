# LLM-Chatbot-Backend

Project is built using TypeScript.

## Required env variables

PORT
OPENAI_API_KEY
MONGODB_URI

> Note Some VPNs mioght not allow MongoDB Atlas connection with `+srv` protocol in such a case use explicit connection string without srv
> Example:

```
MONGODB_URI=mongodb://<username>>:<password>@clusterzero0-shard-00-00.6mg7n.mongodb.net:27017,clusterzero0-shard-00-01.6mg7n.mongodb.net:27017,clusterzero0-shard-00-02.6mg7n.mongodb.net:27017/?ssl=true&replicaSet=atlas-wa8hrv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ClusterZero0
```

## How to start dev mode

Run `yarn run dev`

## How to run production

Run `yarn run start`
