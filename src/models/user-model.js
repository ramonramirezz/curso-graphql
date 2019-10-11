const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const dbUser = require('../db/db');


let UserSchema = new Schema({
	firstName: {type: String, require: true},
	lastName: {type: String, require: true},
	tel: {type: String, require: true}  
});


module.exports = dbUser.model('User', UserSchema);