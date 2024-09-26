// controllers/jobController.js
const Job = require('../models/Job');

// Create new job
const createJob = async (req, res) => {
  const { title, description, client, payment, milestones } = req.body;

  try {
    const newJob = new Job({ title, description, client, payment, milestones });
    await newJob.save();
    res.status(201).json({ message: 'Job created successfully', newJob });
  } catch (err) {
    res.status(500).json({ message: 'Error creating job', error: err });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate('client freelancer');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching jobs', error: err });
  }
};

module.exports = { createJob, getJobs };
