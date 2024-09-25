const express = require('express');
const mongoose = require("mongoose");
const app = express();

const taskRouter = require("./routes/taskRoutes");
const userRouter = require("./routes/userRoutes");


const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose.connect(
    // "mongodb://root:root@172.18.0.2:27017/?authSource=admin")
    // "mongodb://root:root@mongo:27017/?authSource=admin")
    MONGO_URL)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    })
    .catch((e) => {
        console.log("Connection failed: ", e);
    })

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`<h1>Hello World using Express and Docker!!!!</h1>
        <a href=#>Login Page || <a href=#>Signup Page</a>`);
})

app.get("/login", (req, res) => {
    res.send(`<h1>Login Page</h1>`);
})

app.use("/", userRouter);
app.use("/api/v1/tasks", taskRouter);


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


