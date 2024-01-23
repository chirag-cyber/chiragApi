const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const apiData = require('../CocktailData.json');
app.use(cors());


const SetData = JSON.stringify(apiData);
app.get("/",(req,res)=>{
    
    res.send(SetData);
})





app.listen(port,(req,res)=>{
    console.log("server started successfully");
})
