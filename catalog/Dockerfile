FROM  node:18-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY index.js .
COPY catalog.js .

EXPOSE 3000

CMD ["yarn", "start"]
