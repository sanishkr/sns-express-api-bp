# sns-express-api-bp
This is a cross-environment node boilerplate which uses express server for exposing REST API endpoints. It has 3 different environment setups namely, local, stage and prod.

## Usage

`git clone https://github.com/sanishkr/sns-express-api-bp.git`

`cd sns-express-api-bp`

## Sample ".env" file content format
`NODE_ENV = prod`

`PROD_APP_HOST = localhost`

`STAGE_APP_HOST = localhost`

`LOCAL_APP_HOST = localhost`

`PROD_APP_PORT = 3000`

`STAGE_APP_PORT = 3001`

`LOCAL_APP_PORT = 3002`

* Usually, we should append `.env` to `.gitignore`.

## Environments and Scripts
* Local: `npm run start:local`

    It will run express server on port 3002 for local 'dev' machine. It will make use of nodemon for detecting any changes in the code and restarts the server by itself.

* Stage: `npm run start:stage`

    You should run this command on your stage machine. It will run express server on port 3001 for your remote stage machine. The server will die as soon as you disconnect from your remote machine or kill the process.

* Production: `npm run start:prod`

    You should run this command on your production machine. It will run express server on port 3000 for your remote production machine. It will make use of pm2 to make sure your server is always running.

* `npm start` It works normal as expected

* `npm test` It is used to testing any cases if you have written. // More to come soon.

## More Details
* Language: Javascript
* Server: NodeJS
* Version : 0.0.1
* DB: -
* Microservice Dependency: -
* Postman Collection Link: `https://www.getpostman.com/collections/`
* Author: SNS