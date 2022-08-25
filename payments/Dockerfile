FROM  node:18-alpine

WORKDIR /code

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY tsconfig.build.json .
COPY tsconfig.json .
COPY nest-cli.json .
COPY src src

EXPOSE 3000

CMD ["yarn", "start"]
