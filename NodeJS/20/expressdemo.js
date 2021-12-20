const express = require('express') 

//app the entire application
let app = express()
const port = process.env.PORT || 3000


app.set('view engine', 'ejs');


//define the routes
app.use('/assets', express.static(__dirname+"/public"));

// app.use(function(req, res, next){
//     console.log("Request Url:",req.url);
//     next();
// });

app.get("/", function(req, res){
    res.render('index')
})
app.get("/person/:id/:name", function(req, res){
    res.render('person',{ID:req.params.id, NAME:req.params.name})
})

app.listen(port, ()=>{
    console.log("Server Started")
})




