#!/bin/bash

cd /app && npm run setup && npm run test
cd /app && pm2-runtime ecosystem.config.js