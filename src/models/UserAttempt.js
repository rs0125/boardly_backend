const mongoose = require('mongoose');

const UserAttemptSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paper_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PreviousYearPaper' },
  started_at: { type: Date },
  completed_at: { type: Date },
  status: { type: String },
  score: { type: Number },
});

module.exports = mongoose.model('UserAttempt', UserAttemptSchema);