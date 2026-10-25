const express = require("express");
const app = express();

const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/ParadiseTranquil"

main().then(() =>{
    console.log("mongoose connected");
})
.catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) =>{
    res.send("root is working");
})


app.listen(8080, () =>{
    console.log("server is running to port 8080");
})