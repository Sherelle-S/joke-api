const express = require("express");
const app = express();
const env = require("")
const MongoClient = MongoClient 
const ejs = require ("ejs")

require("dotenv").comfig({path: ".config/env"})

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// api example

app.get('/api', apiController.getapi)

app.listen(process.env.PORT, ()=>{
    PORT
})
get 

mongodb+srv://Sherelle:password@100hours.ckmwsuj.mongodb.net/?retryWrites=true&w=majority