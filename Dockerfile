FROM node:lts-alpine

WORKDIR /app

COPY package*.json .
RUN npm i && npm i -g serve

COPY . .

RUN npm run build

WORKDIR /app/dist

EXPOSE 3000

CMD ["serve", "-s"]