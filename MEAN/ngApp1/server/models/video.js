const mongoose = require('mongoose')

const Schema = new mongoose.Schema

const videoSchema = new Schema({
  title:String,
  url:String,
  description:String
});

module.exports = mongoose.model('video', videoSchema, 'videos')
