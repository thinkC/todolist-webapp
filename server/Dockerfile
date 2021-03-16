FROM node:alpine

WORKDIR /server

COPY package*.json package-lock.json ./

RUN npm install

COPY ./src ./src

EXPOSE 4000

CMD [ "npm", "start" ]