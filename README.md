# Build a REST API with Node.js, Mongoose & TypeScript

Note: This repository includes the [postman collection for the finished API](postman_collection.json)

Note 2: Make sure you add .env to your .gitignore before pushing any changes to your repository. You will also want to generate new public & private keys

#### Generate new keys: https://travistidwell.com/jsencrypt/demo/

#### Base64 encode the keys: https://www.base64encode.org/



## Common issues
* I'm getting a JWT malformed error: https://youtu.be/FzKrfwplips
* Managing environment variables: https://youtu.be/gfyQzeBlLTI

## What you will need
* A running instance of MongoDB
* Postman
* An IDE or text editor (VS Code)
* A web browser
* A package manager such as NPM or Yarn
* Node.js installed

## What next?
* Testing the API with Jest
* Build a React.js user interface
* Add Prometheus metrics to the API
* Deploy the API with Caddy & Docker
* Add Google OAuth

## Concepts
* REST API principals
    * CRUD
    * HTTP methods
* JWT & refresh tokens
* Request validation
## Technologies
* Node.js
* MongoDB with Mongoose
* TypeScript
* Express.js & Express.js middleware
* Zod validation

## Data flow
![](./diagrams/data-flow.png)


## Access & refresh token flow
![](./diagrams/refresh-token-flow.png)


# Deployment

## What will we use
* Docker (image)
* docker-compose (container)
* Caddy - Web server
* DigitalOcean

Note: You will need Docker installed locally if you want to test your Docker configutation


## Bootstrap the application

1.  `npm init --y`
2.  `npx typescript --init`
3.  `npm install express yup config cors mongoose pino pono-preety dayjs bcrypt jsonwebtoken lodash nanolid`
4.  `npm install @types/body-parser @types/config @types/cors @types/express @types/node @types/yup @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node typescript -D`
5. `mkdir src`
6. `touch src/app.ts`
7. `touch nodemon.json` && Put this in that file
 `{
  "restartable": "rs",
 "ignore": [".git", "node_modules/", "dist/", "coverage/"],
   "watch": ["src/"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
   "env": {
     "NODE_ENV": "development"
   },
  "ext": "js,json,ts"
 }`

8. Add this script in package.json
 `"scripts": {
     "dev": "nodemon --config nodemon.json src/app.ts"
 },`
