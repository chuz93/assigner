var mongoose = require('mongoose');

//defining schema for users table
var userSchema = new mongoose.Schema({
	name : String,
	last_name : String,
	username: String,
	password: String,
	email: String,
	city : String,
	sta_dyn: String,
	max_case: Number,
	status: Boolean,
	activeSession: String,
	role: String,
	last_case: String
});



//MODEL for Users using SCHEMA HOTELS

mongoose.model('user', userSchema, 'users')
