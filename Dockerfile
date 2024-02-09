# Base image
FROM node:20.11.0

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

COPY tsconfig.json ./

# Install app dependencies
RUN npm install

# Install nest
RUN npm i -g @nestjs/cli

# Bundle app source
COPY ./src .

# Copy the .env file
COPY .env ./

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]