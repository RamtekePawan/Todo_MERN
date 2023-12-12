const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo); 
}

module.exports.saveToDo = (req, res) => {
    const { toDo } = req.body;
    console.log(toDo);
    ToDoModel.create({ toDo }).then(data => {
        console.log("Saved Successfully...")
        res.status(201).send(data);
    }).catch((error) => {
        if (error.name === 'ValidationError') {
            console.log('Validation Error:', error.message);
            res.status(400).send({ error: error.message });
        } else {
            console.log('Unexpected Error:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    })
}

module.exports.updateToDo = (req, res) => {
    const { id } = req.params
    const { toDo } = req.body;

    ToDoModel.findByIdAndUpdate(id, { toDo }).then(data => {
        console.log("Updated Successfully ...")
        res.status(201).send(data);
    }).catch((error) => {
        if (error.name === 'ValidationError') {
            console.log('Validation Error:', error.message);
            res.status(400).send({ error: error.message });
        } else {
            console.log('Unexpected Error:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    })
}

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params
    const { toDo } = req.body;

    ToDoModel.findByIdAndDelete(id, { toDo }).then(data => {
        console.log("Deleted Successfully ...")
        res.status(201).send(data);
    }).catch((error) => {
        if (error.name === 'ValidationError') {
            console.log('Validation Error:', error.message);
            res.status(400).send({ error: error.message });
        } else {
            console.log('Unexpected Error:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    })
}
