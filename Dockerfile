FROM node:16

WORKDIR /user/src/app


COPY package.json  ./
RUN npm i

COPY . .
EXPOSE 3002
CMD [ "nodemon", "db/server.js" ]

