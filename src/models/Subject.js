const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class_level: { type: Number, required: true },
  stream: { type: String },
});

module.exports = mongoose.model('Subject', SubjectSchema);