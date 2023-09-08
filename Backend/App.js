const express = require("express");

const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const LoginRoutes = require("./Routes/LoginRoutes");

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}))



app.use("/api", LoginRoutes);

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017`).then(() =>{
    console.log("connected to mongodb");
}).catch((error) => {
    console.log(error);
    process.exit(1);
})

app.listen(3001, () => {
    console.log(`server started on port 3001`);
});