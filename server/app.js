const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const Port = process.env.PORT || 3000

// DOTENV
require('dotenv').config({path: path.resolve(__dirname+'/.env')});
// create our express app
const app = express()
//Middelware
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())

//MongoDB Connection
mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => console.log(err))

// Router Prefix
app.use('/api/post',require('./route/router'))

//Handle Production
if(process.env.NODE_ENV === 'production'){
  // Static Folder
  app.use(express.static(__dirname+'/public/'))

  // Handle SPA
  app.get(/.*/,(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
  })
}
app.get('/',(req,res)=>{
    res.send("DHFLDSLFHAL")
})
//Start Server
app.listen(Port,()=>console.log(`POST IS ${Port}`))
