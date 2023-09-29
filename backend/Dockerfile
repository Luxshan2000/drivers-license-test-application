# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json to the container
COPY package.json ./

# Install application dependencies
RUN npm install

# Copy all source code to the container
COPY . .

# Expose the port your frontend server will run on
EXPOSE 5000

# Command to run your frontend server
CMD ["node", "server"]
