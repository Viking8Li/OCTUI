const express = require('express')
const api = require('./routes/api')
const cors = require('cors')

const PORT = 3000
const app = express()
app.use(express.json())
app.use(cors())

//localhost:3000/api
app.use('/api', api)

//localhost:3000
app.get('/', function(req, res){
    res.send("Hello World From Server");
})

app.listen(PORT, function(){
    console.log("Server running on Localhost");
})