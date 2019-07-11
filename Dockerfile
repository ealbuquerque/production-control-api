FROM node:8

WORKDIR /usr/src/app 

COPY package*.json ./
RUN yarn install --production

ENV APP_HOST='0.0.0.0' \
  APP_PORT='5000' \
  DB_DIALECT='' \
  DB_HOST='' \
  DB_NAME='' \
  DB_PASSWORD='' \
  DB_PORT='' \
  DB_USERNAME='' \
  NODE_ENV='development'

COPY .babelrc ./.babelrc
COPY .sequelizerc ./.sequelizerc
COPY database ./database
COPY src ./src

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 5000

CMD [ "yarn", "production", "--no-daemon" ]
