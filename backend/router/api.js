const express = require("express");
const router = express.Router();
const TodoController = require("../controller/TodoController");

router.get("/todo", TodoController.get_todo);
router.post("/create", TodoController.create_todo);
router.put("/update/:id", TodoController.update_todo);
router.delete("/delete/:id", TodoController.delete_todo);

module.exports = router;
