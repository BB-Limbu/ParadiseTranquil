const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/ParadiseTranquil"

main().then(() =>{
    console.log("connected to DB!");
})
.catch(err =>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) =>{
    res.send("root is working");
})

//Index Route
app.get("/listings",async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
 })

  //New Route
 app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
 })

 //Show route
 app.get("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
 })

 //Create Route
 app.post("/listings", async(req, res) =>{
    //let {title, description, image, price, country, location} = req.body;
    /* let listing = await req.body.listing; */
    // new Listing(listing);
    
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})


// app.get("/testListing", async(req, res) =>{
//     let sampleListing = new Listing({
//         title:"my new villa",
//         description : "By the beach",
//         price : 1200,
//         location:"Calangute, Goa",
//         country : "India"
//     })
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// })

app.listen(8080, () =>{
    console.log("server is running to port 8080");
})