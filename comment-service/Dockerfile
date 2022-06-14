FROM node:latest
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i -g pm2
COPY script.sh /app 
RUN chmod 755 /app/script.sh
CMD ["/bin/bash", "/app/script.sh"]