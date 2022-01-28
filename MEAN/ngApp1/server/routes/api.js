const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Video = require('../models/video');


const db = "mongodb://localhost:27017/videoplayer"

mongoose.connect(db, function(err){
  if(err){
    console.log('Error!'+err);
  }
  else{
    console.log("Connect to Database");
  }
})

//locahost:3000/api/videos
router.get('/videos', (req, res)=>{
  console.log("Get all videos")
  Video.find({})
      .exec(function(err, videos){
          if(err){
              console.log(err)
          }
          else{
              res.json(videos)
          }
      })
});


module.exports = router;
