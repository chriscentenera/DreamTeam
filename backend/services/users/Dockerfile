FROM node:lts-alpine3.17

ENV SERVICE=users
EXPOSE 3030/tcp
WORKDIR /srv

COPY ./routes/${SERVICE}/${SERVICE}.js ./routes/${SERVICE}/${SERVICE}.js
COPY bin ./bin
COPY middleware ./middleware
COPY public ./public
ADD app.js package.json ./
RUN npm install
ENTRYPOINT ["npm", "start"]
