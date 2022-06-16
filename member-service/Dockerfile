FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
COPY script.sh /app 
RUN chmod 755 /app/script.sh
CMD ["/bin/bash", "/app/script.sh"]