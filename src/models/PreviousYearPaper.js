const mongoose = require('mongoose');

const PreviousYearPaperSchema = new mongoose.Schema({
  subject_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  year: { type: Number },
  difficulty_level: { type: String },
  video_solution_url: { type: String },
  topper_solution_url: { type: String },
  total_sections: { type: Number },
  total_questions: { type: Number },
});

module.exports = mongoose.model('PreviousYearPaper', PreviousYearPaperSchema);