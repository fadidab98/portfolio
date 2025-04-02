# Use official Node.js runtime as the base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3003 (we'll map it in docker-compose)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]