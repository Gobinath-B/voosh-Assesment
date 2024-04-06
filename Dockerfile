# Use the official Node.js image as base
FROM node:14


WORKDIR /app


COPY package*.json ./


RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (or any other port your application listens on)
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
