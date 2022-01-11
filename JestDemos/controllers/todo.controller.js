const TodoModel  = require("../model/todo.model")
exports.createTodo = async (req, res, next) => {
    //create - actually add to db
    //REST - return an reponse code. otherwise the req will keep executing
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel); //it also ends the res
}