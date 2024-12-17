const mongoose = require('mongoose');

const UserStreakSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true },
  activity_count: { type: Number },
});

module.exports = mongoose.model('UserStreak', UserStreakSchema);