const router = require("express").Router();
const todoController = require("../controller/todoController.js");

router.post("/create", todoController.create);
router.get("/", todoController.getTodo);
router.put("/:id", todoController.updated);
router.delete("/:id", todoController.deleteByParams);

module.exports = router;
