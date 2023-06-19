const express = require('express');
const mongoose= require('mongoose');
const app = express()
const port = 5000
const mongoURI = 'mongodb+srv://deeksha1511:Deeksha1511@cluster0.ei3093u.mongodb.net/BiteBuddy';

const mongoDb = mongoose.connect(mongoURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("db connected successfully");
}).catch((err)=>{
  console.log(err);
});



app.get('/', (req,res)=>{
  res.send('Hello World')
})

app.listen(port, ()=>{
  console.log(`Server connected on ${port}`);
})
