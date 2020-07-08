FROM node:13-alpine

ENV NODE_ENV=production
RUN mkdir /app
COPY package.json /app
COPY yarn.lock /app
WORKDIR /app

RUN yarn install &&\
    yarn add --dev strip-ansi

COPY . /app
RUN npm run build

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
CMD /docker-entrypoint.sh
