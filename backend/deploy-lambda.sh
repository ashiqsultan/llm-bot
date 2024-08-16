#!/bin/bash

FUNCTION_NAME="my-express-app"
ZIP_FILE="deploy-package.zip"
# Replace with your actual role ARN
ROLE_ARN="arn:aws:iam::851725304804:role/lambda-express-role"
REGION="ap-south-1"

# Check if the ZIP file exists
if [ ! -f "$ZIP_FILE" ]; then
    echo "Error: ZIP file '$ZIP_FILE' not found."
    exit 1
fi

aws lambda update-function-code \
    --function-name $FUNCTION_NAME \
    --zip-file fileb://$ZIP_FILE \
    --region $REGION

# Check the result of the deployment
if [ $? -eq 0 ]; then
    echo "Lambda function '$FUNCTION_NAME' updated successfully."
else
    echo "Failed to update the Lambda function '$FUNCTION_NAME'."
fi