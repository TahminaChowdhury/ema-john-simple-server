const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("ema-john server is running")
});



const uri = "mongodb+srv://<username>:<password>@cluster0.ckcl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
    console.log("Running server at port", port)
});