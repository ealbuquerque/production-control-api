#!/bin/bash

set -e

echo "APP_HOST=${APP_HOST}" > .env
echo "APP_PORT=${APP_PORT}" >> .env
echo "DB_DIALECT=${DB_DIALECT}" >> .env
echo "DB_HOST=${DB_HOST}" >> .env
echo "DB_NAME=${DB_NAME}" >> .env
echo "DB_PASSWORD=${DB_PASSWORD}" >> .env
echo "DB_PORT=${DB_PORT}" >> .env
echo "DB_USERNAME=${DB_USERNAME}" >> .env
echo "NODE_ENV=${NODE_ENV}" >> .env

cat .env

yarn db-init

exec "$@"
