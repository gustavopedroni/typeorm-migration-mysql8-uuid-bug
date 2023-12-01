FROM node:18-alpine as build

RUN npm install -g npm@10.2.4

WORKDIR /home/node/app

USER node

EXPOSE 3000