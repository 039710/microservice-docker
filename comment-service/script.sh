#!/bin/bash

cd /app && npx sequelize-cli db:create
cd /app && npx sequelize-cli db:migrate
cd /app && npx sequelize-cli db:seed:all
cd /app && npm run test-case
cd /app && pm2-runtime ecosystem.config.js