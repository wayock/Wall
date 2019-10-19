# Wall


### Coding Challenge
In 90 minutes create an application in which a user can post to a wall and read other comments posted on the wall.

### Solution

The Wall web application allows users to read posts and create posts on a website. This web application 
utitlizing Node.js, Express, EJS, PostgresSQL, Sequelize, Javascript, Bootstrap to create posts. 

### Run & Testing
```git clone https://github.com/wayock/wall.git
cd wall
npm install```

To run the web application, install the dependences listed below with the `npm start` command.  Testing is done through Jasmine,
Jasmine testing can be run throught the `npm test` command.  


### Dependencies to Install
  - Install Node.js https://nodejs.org/en/download/package-manager/
  - Install PostgreSQL https://www.postgresql.org/download/
  - "body-parser": "^1.18.2",
  - "dotenv": "^5.0.0",
  - "ejs": "^2.5.7",
  - "express": "^4.16.2",
  - "pg": "^7.4.1",
  - "pg-hstore": "^2.3.2",
  - "sequelize": "^4.44.3"
  - "jasmine": "^3.0.0",
  - "request": "^2.83.0"
  
  ### Future Improvements 
  1. Create a users database table and associate users with posts.
  2. Create a comments database table and associate comments with posts and users.
