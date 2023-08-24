
# Project Title

this is a Full-Stack application for HouseTable.



## Tech Stack used:
Frontend: React

Backend: Node.js and express.js

DataBase: MySQL 

(note: this documentaion assumes that you have a mysql schema ready with a table called House that has the colums, ID, Address, currentValue, loanAmount, risk)
## Instructions to use the APP (visual with pictures)
please open this link for an easy and visual way to help you navigate the app.

https://scribehow.com/shared/Updating_House_Details_on_Localhost_Step-by-Step_Guide__UxzIxHTqR3KeqaU8jae8LQ
## Written Instructions
1- clone this repo into your own github repo or just download the folders.

2- open both the client folder and the server folder in your code editor.


3- run "npm install" to install your node_modules folder.

4- using the terminal, navigate to the path of the client folder and run the command "npm start" or "yarn start" if you use yarn.
(this will run the react app and display the frontend)

5- navigate to the path of the server and run "npm run start" or if you use yarn replace "npm" with "yarn".
(this will run our server)

6- assuming you have a mysql schema ready with a table called House that has the coloumns mentions above then your database is configered and ready to use.

7- if step 6 doesnt apply to you then inside the server folder there is another folder called config that has a config.json file, just build your schema as specified before and add your info to that config.json file in the "development" section to connect the database.example: 
```
"development": {
    "username": "root",
    "password": "password123",
    "database": "housetable",
    "host": "localhost",
    "dialect": "mysql"
  },
```

8- from here its strait forward to use the app, keep in mind that the frontend runs on port 3000 and the backend on port 3001 and the database runs on localhost.

Happy hacking 🥳
