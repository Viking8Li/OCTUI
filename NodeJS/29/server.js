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

app.get('/posts', authenticateToken, (req, res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
    //Authenticate user using username + password

    const username = req.body.username
    const user = { name: username}
    //create the jwt token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    // authorization : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImlhdCI6MTY0MDgwNjMzOH0.7N-UxUw3o9RaECJnB8-gGq-hvhDa39S9JSSEEQtp6Vg
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(3000)