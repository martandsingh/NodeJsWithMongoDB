const mongoose = require('mongoose'),
Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean}
});

module.exports = mongoose.model('Book', bookModel);