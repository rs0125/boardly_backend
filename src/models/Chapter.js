const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  name: { type: String, required: true },
  order_index: { type: Number },
});

module.exports = mongoose.model('Chapter', ChapterSchema);