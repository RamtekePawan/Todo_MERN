const { Router } = require("express");
const { getToDos, saveToDo, deleteToDo, updateToDo } = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);

router.post("/save", saveToDo);

router.delete("/delete/:id", deleteToDo);

router.put("/update/:id", updateToDo);

module.exports = router;