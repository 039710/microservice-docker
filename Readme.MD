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

This process of deployment is for windows, for linux there will be slightly different config on minikube

1. start minikube in windows with docker engine desktop installed wih powershell elevated with administrator rule
option --driver=hyperv will automatically map the virtual network to host, so we can access it directly

```
$ minikube start --driver=hyperv
```
2. enable ingress addons on minikube

```
$ minikube addons enable ingress
$ minikube addons list | grep ingress
```
![Screenshot](/images/ingress-enabled.jpg)
<br/>
3. apply config map for postgres environment setup

```
  $ kubectl apply -f postgres-config.yml
```
4. deploy postgres service

```
  $ kubectl create -f postgres.yml
```
![Screenshot](/images/deploy-postgres.jpg)
<br/>
5. deploy member service

```
	$ kubectl create -f member.yml
```
![Screenshot](/images/deploy-member.jpg)

<br/>
6. deploy comment service

```
	$ kubectl create -f comment.yml
```
![Screenshot](/images/deploy-comment.jpg)
<br/>
7. check if all deployments and service are running

```
  $ kubectl get all
```
![Screenshot](/images/get-all.jpg)
<br/>
8. to check if service running, we can logs the service

```
  $ kubectl logs service/comment-service
```
![Screenshot](/images/logs-comment.jpg)
<br/>
we can see that service running properly on port 3334 and test running successfully

9. to make service can be exposed by external ip, ingress is used

```
  $ kubectl apply -f ingress.yaml
  $ kubectl get ingresses
```
![Screenshot](/images/ingress.jpg)
<br/>
to make our apps accessible with domain myapp.com we need to add host and address of ingress to hosts config. 
make sure to flush dns after that

> In case of windows user locate to :
C:\Windows\System32\drivers\etc

![Screenshot](/images/hosts.jpg)
<br/>
```
  ipconfig /flushdns
```

for linux 
>/etc/hosts

10. to access member service open http://myapp.com/orgs/xendit/members/ and to access comment service open http://myapp.com/orgs/xendit/comments/
<br/>
![Screenshot](/images/comment-url.jpg)

![Screenshot](/images/member-url.jpg)