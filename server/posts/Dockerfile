# Node server
FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
CMD [ "node", "index.js" ]

# FROM # Client App
# FROM johnpapa/angular-cli as client-app
# LABEL authors="John Papa"
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --silent
# COPY . .
# RUN ng build --prod



