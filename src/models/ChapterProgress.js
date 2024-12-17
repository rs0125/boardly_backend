const mongoose = require('mongoose');

const ChapterProgressSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chapter_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  questions_attempted: { type: Number },
  questions_correct: { type: Number },
  last_attempted_at: { type: Date },
});

module.exports = mongoose.model('ChapterProgress', ChapterProgressSchema);