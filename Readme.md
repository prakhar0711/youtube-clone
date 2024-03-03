# youtube clone backend

### data model [link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

### credits:[link](https://www.youtube.com/@chaiaurcode)

# Steps

## Initializing folder structure and connection to DataBase

```
1)  Initialise a project using npm init.
2)  Install nodemon and prettier(if required)as dev dependencies and setup .prettierrc and .prettierignore.
3)  Create a database in mongoDB.
4)  Add a dev start script as 'nodemon src/index.js where index.js is the starting point'.
5)  Install dotenv ,express and mongoose.
6)  Setup .env outside src folder which contains PORT and MONGODB_URI.
7)  Three .js files in src folder index,constants and app.
8)  Create folders- controllers,db,middlewares,models,routes,utils.
9)  Setup the .env file in src/index.js.
10) Put -nodemon -r dotenv/config --experimental-json-modules src/index.js in dev script in package.json.
11) Create a file index.js in db folder .this will be used for database connection.
12) Create an async function and use try catch block to connect the database.
```
