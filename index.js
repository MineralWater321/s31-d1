//Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");

//Import the task routes
const taskRoute = require("./routes/taskRoute");

//Server setup
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Database connection
//Connecting to MongoDB Atlas

mongoose.connect("mongodb+srv://dbedwardpaler:A9oJgn0nL4BAbIcf@wdc028-course-booking.tgio6.mongodb.net/b138_to-do?retryWrites=true&w=majority",
	{
		useNewUrlParser:true,
		useUnifiedTopology:true	
	}
);

//Add the task route
app.use("/tasks", taskRoute);

//Server listening
app.listen(port, () => console.log(`Now listening to port ${port}`));