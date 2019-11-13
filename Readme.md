## Rest API PostgreSQL And Sequelize


REST API using Javascript  Technologies and PostgreSQL As Database.

To start project in mode **Development:**

`npm run dev`

To transpile the code and create new directory with babel use:

`npm run build`
 
 To Start project in mode **Production:**

 `npm start`


**DevDependencies:**

* Babel: 
    *   @babel/cli
    * @babel/core
    * @babel/node
    * @babel/preset-env
   
*   Nodemon 

**Dependencies:**

* @babel/polyfill
* Express
* Morgan
* Pg
* Pg-hstore
* Sequelize


 
 # Project Structure

``` 
    .
    ├── package.json
    ├── package-lock.json
    ├── Readme.md
    ├── .babelrc
    ├── .gitignore
    ├── sql
    │   └── db.sql
    └── src
        ├── app.js
        ├── controllers
        │   ├── project.controller.js
        │   └── task.controller.js
        ├── database
        │   └── database.js
        ├── index.js
        ├── models
        │   ├── Projects.js
        │   └── Tasks.js
        └── routes
            ├── projects.js
            └── tasks.js

   
```