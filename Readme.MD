# Installation 


## Local Installation
1. locate do directory of of service 
  ```
    cd member-service
  ```
2. copy .env.copy to .env
  ```
    cp .env.copy .env
  ```
3. adjust the environment variable based on client environtment
  change DB_HOST to localhost and MODE to DEVELOPMENT
  ```
  MODE=DEVELOPMENT
  DB_USERNAME=postgres
  DB_PASSWORD=admin
  DB_NAME=member
  DB_HOST=localhost
  DB_PORT=5432
  DB_DIALECT=postgres
  PORT=3333
  ```
4. install dependencies by running
  ```
    npm i
  ```
5. run this command to run the server
  ```
    npm run setup && npm start
  ```
6. to run test case run
  ```
    npm run test
  ```


## Local installation with Docker containers
this instruction is a sample of running docker containers for comment-service,
ths instruction also can be used for deploying member-service in docker.
```
    1. make sure to create .env file, copy the all of .env.copy contents to new .env file
    2. chane env vars of MODE to PRODUCTION and DB_HOST 
        MODE=DEVELOPMENT
        DB_USERNAME=postgres
        DB_PASSWORD=admin
        DB_NAME=member
        DB_HOST=postgres-service
        DB_PORT=5432
        DB_DIALECT=postgres
        PORT=3333
    2. run command docker-compose up -d in the working directory of comment-service folder
    3. access the endpoints localhost:<env_port>/orgs/xendit/comments
```


## Deployment

