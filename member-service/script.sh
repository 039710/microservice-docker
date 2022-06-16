#!/bin/bash

cd /app && npx sequelize-cli db:create
cd /app && npx sequelize-cli db:migrate
cd /app && npm run test
cd /app && npx sequelize-cli db:seed:all
cd /app && npm run start