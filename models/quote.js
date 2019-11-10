var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var quoteSchema = new Schema({
  text: String,
	created: {
		type: Date,
		default: Date.now
	},
  favorited: {
    type: Boolean,
    default: false
  }
});

var Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;