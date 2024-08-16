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

### How to start dev mode

Run `yarn run dev`

### How to run production

Run `yarn run start`

# AWS Lambda Deployment
1. Configure aws cli in your local machine
2. Run the script `./generate-lambda.sh`
3. The above script will create a zip file `deploy-package.zip`
4. Now run the script `deploy-lambda.sh` to deploy the the zip to aws lambda.

> Note the deploy-lambda script contains the update-function command and doesnt create new lambda. if you want to deploy as new lambda then create a new lambda via cli or console and update the script with the new function name.
