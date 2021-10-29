//importing the model
const Task = require("../models/task");

//Controller function for getting all the tasks
module.exports.getAllTasks = () => {
	return Task.find({}).then(result => {
		return result;
	})
}