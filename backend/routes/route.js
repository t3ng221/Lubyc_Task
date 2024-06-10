const { Router } = require("express");
const { addTodo, getTodo } = require("../controller/todoitem");

const router = Router();

router.post("/add", addTodo);
router.get("/alltodo", getTodo);

module.exports = router;

