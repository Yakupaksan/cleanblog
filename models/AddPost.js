const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddPost = new Schema({
    title: String,
    description: String,
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  })

  const event = mongoose.model('AddPost', AddPost);

module.exports = event;