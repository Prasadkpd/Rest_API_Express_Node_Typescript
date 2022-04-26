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
