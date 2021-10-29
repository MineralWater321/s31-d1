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

//Route to create a new task
router.post("/", (req, res) => {
	taskController.createTask(req.body).then(resultFromController => res.send(resultFromController));
})

//Route for deleting a task
//localhost:3001/tasks/091239s0df990
router.delete("/:id", (req,res) => {
	taskController.deleteTask(req.params.id).then(resultFromController => res.send(resultFromController));
})

//Route for updating a task
router.put("/:id", (req,res) => {
	taskController.updateTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})

//1. Create a route for getting a specific task.
router.get("/:id", (req, res) => {
	taskController.getOneTask(req.params.id).then(resultFromController => res.send(
		resultFromController));
})

//5. Create a route for changing the status of a task to "complete".
router.put("/:id/complete", (req,res) => {
	taskController.completeTask(req.params.id, req.body).then(resultFromController => res.send(resultFromController));
})



module.exports = router;