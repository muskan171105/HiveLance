// models/Job.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  payment: { type: Number, required: true },
  milestones: [
    {
      description: String,
      amount: Number,
      completed: { type: Boolean, default: false },
    },
  ],
  status: { type: String, enum: ['open', 'in progress', 'completed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);
