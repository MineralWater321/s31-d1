//Create the schema, model
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	name: String,
	status: {
		type: String,
		default: "pending"
	}
});

//Export the model
module.exports = mongoose.model("Task", taskSchema);