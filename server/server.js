//this is the main server file where all the api endpoints are joined.
//the server is running on port 3001 while our frontend is at port 3000.

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = require("./models");

const return_house_info = require("./routes/return_house_info");
const submit_house = require("./routes/submit_house");
const update_house_info = require("./routes/update_house_info");

app.use("/api/houses", submit_house);
app.use("/api/houses/latest", return_house_info);
app.use("/api/houses", update_house_info);


db.sequelize.sync().then((req) => {
    app.listen(3001, () => {
        console.log("server is running on port 3001");
    })
});