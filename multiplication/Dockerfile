FROM node:19

# Create app directory
WORKDIR ~/Desktop/Ravi/Docker/dockercomp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8003
CMD [ "node", "index.js" ]