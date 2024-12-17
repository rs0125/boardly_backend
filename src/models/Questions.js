const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  paper_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PreviousYearPaper' },
  chapter_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  section_name: { type: String },
  question_number: { type: Number },
  content: { type: String },
  marks: { type: Number },
  solution_text: { type: String },
  video_timestamp: { type: String },
});

module.exports = mongoose.model('Question', QuestionSchema);