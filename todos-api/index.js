const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.listen(3001,()=>{
    console.log('server is running on port 3001')
});

mongoose.connect('mongodb://localhost:27017/todos')

.then(()=>console.log("MongoDB Connected"))
 .catch((err)=>console.log("Problem connecting mongoDB "+err))

 app.get('/',(req,res)=>{

     res.send("WORKING")
    
    });