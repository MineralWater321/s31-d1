//Setup express dependency
const express = require("express");
//Create a Router instance
const router = express.Router();
//import TaskController.js
const taskController = require("../controllers/taskController");

//Routes

//Route to get all tasks
router.get("/", (req, res) => {
	taskController.getAllTasks().then(resultFromController => res.send(
		resultFromController));
})

module.exports = router;