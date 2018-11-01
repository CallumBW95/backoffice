const mongoose = require('mongoose');
const { Schema } = mongoose;

const fieldSchema = new Schema({
	name: String,
	content: String,
	enabled: Boolean
});

module.exports = fieldSchema;