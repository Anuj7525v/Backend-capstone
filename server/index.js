const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const port = 4000;
const app = express();
const logStream = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a', })
const errorStream = fs.createWriteStream(path.join(__dirname, "error.txt"), { flags: 'a', })
const authRoutes = require("./routes/auth");
//const jobRoutes = require("./routes/job");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const log = `${req.method} ${req.originalUrl} ${time}`;
    logStream.write(log + '\n');
    next();
});

app.use("/api/auth",authRoutes);
 //app.use("/api/job",jobRoutes);

app.use((req, res, next) => {
    const now = new Date();
    const time = `${now.toLocaleTimeString()}`;
    const error = `${req.method} ${req.originalUrl} ${time}`;
    errorStream.write(error + '\n');
    res.status(404).send("Route not found !");
}) ;
 app.use((err,req,res,next) => {
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
    mongoose.connect('mongodb+srv://anuj7525anu:anuj7525@cluster0.vqlwp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Sever connected with DB")
    }).catch((error) => {
        console.log(error)
    })
})
