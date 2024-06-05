const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const port = 4000;
const env = require("dotenv");
env.config();
// npm run dev == for running nodemon .
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");
const cors = require("cors");

app.use(cors({
    origin:"http://localhost:3000"
}));
const logStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a', });
const errorStream = fs.createWriteStream(path.join(__dirname, "error.txt"), { flags: 'a', });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const log = `${req.method} ${req.originalUrl} ${time}`;
    logStream.write(log + '\n');
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);

app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const error = `${req.method} ${req.originalUrl} ${time}`;
    errorStream.write(error + '\n');
    res.status(404).send("Route not found !");
});
app.use((err, req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const error = `${req.method} ${req.originalUrl} ${time}`;
    errorStream.write(error + err.stack + '\n');
    res.status(500).send("Internal Sever Error");
});
app.get('/', (req, res) => {
    res.send("all good.").status(200);
})
app.listen(port, () => {

    mongoose.connect(process.env.Mongoose_DB)
        .then(() => {
            console.log(`Sever connected with DB on ${port}`)
        }).catch((error) => {
            console.log(error)
        })
})
