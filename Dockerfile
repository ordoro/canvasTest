FROM node:11.13.0

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app

CMD ["yarn", "start"]
