# Base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose app port
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
