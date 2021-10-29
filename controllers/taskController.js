//importing the model
const Task = require("../models/task");

//Controller function for getting all the tasks
module.exports.getAllTasks = () => {
	return Task.find({}).then(result => {
		return result;
	})
}

//Controller function for creating a task
module.exports.createTask = (requestBody) => {
	//Creates a task object based on the Mongoose model "Task"
	let newTask = new Task({
		//Sets the "name" property with the value received from the client/Postman
		name: requestBody.name,
	})

	return newTask.save().then((task, error) => {
		if(error){
			console.log(error);
			return false;
		}
		else{
			return task;
		}
	})
}

//Controller function for deleting a task
module.exports.deleteTask = (taskId) => {
	return Task.findByIdAndRemove(taskId).then((removedTask, err) => {
		if(err){
			console.log(err);
			return false;
		}
		else{
			return removedTask;
		}
	})
}


//Controller function for updating a task
module.exports.updateTask = (taskId, newContent) => {
	return Task.findById(taskId).then((result, error) => {
		if(error){
			console.log(error);
			return false;
		}

		result.name = newContent.name;

		return result.save().then((updatedTask, saveErr) => {
			if (saveErr){
				console.log(saveErr);
				return false;
			}
			else{
				return updatedTask;
			}
		})
	})
}


//2. Create a controller function for retrieving a specific task.
module.exports.getOneTask = (taskId) => {
	return Task.findById(taskId).then((result) => {
		return result;
	})
}

//6. Create a controller function for changing the status of a task to "complete".
module.exports.completeTask = (taskId) => {
	return Task.findById(taskId).then((result, error) => {
		if(error){
			console.log(error);
			return false;
		}

		result.status = "complete";

		return result.save().then((completeTask, saveErr) => {
			if (saveErr){
				console.log(saveErr);
				return false;
			}
			else{
				return completeTask;
			}
		})
	})
}