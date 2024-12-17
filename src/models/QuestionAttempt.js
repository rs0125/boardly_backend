const mongoose = require('mongoose');

const QuestionAttemptSchema = new mongoose.Schema({
  user_attempt_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserAttempt' },
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  status: { type: String },
  answer_pdf_url: { type: String },
  reviewed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  review_score: { type: Number },
  review_feedback: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuestionAttempt', QuestionAttemptSchema);