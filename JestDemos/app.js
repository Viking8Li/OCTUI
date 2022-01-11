const express = require('express');
const todoRoutes = require('./routes/todo.routes');
const app = express();


app.use("/todos", todoRoutes);
app.use(express.json())

app.get("/", (req, res)=>{
    res.json("Hello World");
});

// app.listen(3000, (err)=>{
//     console.log("Server is running")
// })
module.exports = app;