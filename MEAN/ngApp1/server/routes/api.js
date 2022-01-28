const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Video = 
const db = "mongodb://localhost:27017/videoplayer"

mongoose.connect(db, function(err){
  if(err){
    console.log('Error!'+err);
  }
  else{
    console.log("Connect to Database");
  }
})

//localhost:3000/api
router.get('/', function(req, res){
  res.send('Api Works')
});

module.exports = router;
