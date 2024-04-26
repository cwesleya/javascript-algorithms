# Use the official Node.js 22-slim image
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including 'jest'
RUN npm install

# Copy the rest of your application's source code from your host to your image filesystem.
COPY . .

# Command to run the tests
CMD ["npm", "test"]