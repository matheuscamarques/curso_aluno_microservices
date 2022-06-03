FROM node:16.13.1-alpine

RUN apk add --no-cache bash

RUN npm i -g @angular/cli@latest npm@latest

RUN mkdir /home/node/app && chown node:node /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules

WORKDIR  /home/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN chmod +x /home/node/app/entrypoint.sh

EXPOSE 4200

ENTRYPOINT ["/home/node/app/entrypoint.sh"]