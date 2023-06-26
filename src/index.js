const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const apiData = require('../CocktailData.json');
app.use(cors());

app.get("/",(req,res)=>{
    res.send(apiData);
})





app.listen(port,(req,res)=>{
    console.log("server started successfully");
})