const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate');

const fieldSchema = require('./PageField');

const pageSchema = new Schema({
	title: String,
	content: String,
	fields: [fieldSchema],
	slug: String,
	enabled: {
		type: Boolean,
		default: true
	}
});

pageSchema.plugin(mongoosePaginate);

mongoose.model("Pages", pageSchema);