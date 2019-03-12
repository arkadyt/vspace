FROM node:11.4-alpine

WORKDIR /usr/src/app
COPY . .

RUN npm install --only=production

EXPOSE 5003

CMD ["node", "server.js"]
