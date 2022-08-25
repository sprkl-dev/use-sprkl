FROM node:18-alpine

WORKDIR /code/


COPY package.json .
COPY yarn.lock .


RUN yarn

COPY src src
COPY vite.config.js . 
COPY index.html .

CMD yarn dev
