const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()
//body-parser
app.use(express.json())

const posts = [
    {
        username:'John',
        title:'Post 1'
    },
    {
        username:'Jill',
        title:'Post 2'
    }
]

app.get('/posts', (req, res)=>{
    res.json(posts)
})

app.post('/login', (req, res) => {
    //Authenticate user using username + password

    const username = req.body.username
    const user = { name: username}
    //create the jwt token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

app.listen(3000)