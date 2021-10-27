const express = require("express");
const { MongoClient } = require('mongodb');
const app = express();
const cors =require("cors");
const port = process.env.PORT || 5000;

// username:emaJohnSimple
// pass: OhbRfiJAk6BDujxj

// Middleware
app.use(cors());
app.use(express.json());

// environment variable access korte hbe procces.env. diye access korte hbe.

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ckcl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req,res) => {
    res.send("ema-john server is running")
});

app.listen(port, () => {
    console.log("Running server at port", port)
});


