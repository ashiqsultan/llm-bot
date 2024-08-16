#!/bin/bash

# Compile TypeScript code
yarn run build

# Create deployment package directory
mkdir -p deploy-package

# Copy necessary files
cp -r dist package.json package-lock.json node_modules deploy-package/

# Create ZIP file
cd deploy-package
zip -r ../deploy-package.zip .

# Clean up
cd ..
rm -rf deploy-package

echo "Deployment package created: deploy-package.zip You can now run aws cli to deploy lambda"