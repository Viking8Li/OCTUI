const express = require('express')
const api = require('./routes/api')

const PORT = 3000
const app = express()
app.use(express.json())

//localhost:3000/api
app.use('/api', api)

app.get('/', function(req, res){
    res.send("Hello World From Server");
})

app.listen(PORT, function(){
    console.log("Server running on Localhost");
})