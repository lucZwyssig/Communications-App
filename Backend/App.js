const express = require("express");

require('dotenv').config();

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const LoginRoutes = require("./Routes/LoginRoutes");

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));


app.use("/api", LoginRoutes);

mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/Communication`).then(() =>{
    console.log("connected to mongodb");
}).catch((error) => {
    console.log(error);
    process.exit(1);
});

app.listen(3001, () => {
    console.log(`server started on port 3001`);
});