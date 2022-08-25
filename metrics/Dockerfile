
FROM  node:18-alpine

WORKDIR /code/
COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
