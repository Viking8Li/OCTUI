const express = require('express')
const path = require('path')

const api = require('./server/routes/api')
const PORT = 3000;

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,'dist')));

app.use('/api', api)

app.use('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(PORT, function(){
  console.log("Server Running at 3000");
})
