const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbUser = require('../../db/db.js');

let UserSchema = new Schema({
	firstName: {type: String, require: true}
	lastName: {type: String, require: true} 
	tel: {type: String, require: true}  
});


module.export = dbUser.model('User', UserSchema);