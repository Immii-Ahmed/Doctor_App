// models/userSchema.js
const mongoose = require('mongoose');

// user's and doctors 
const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['user', 'doctor'], required: true, default: 'user' },
});

// apointments 
const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { type: String, required: true, minlength: 4 },
    date: { type: Date, required: true },
    department: { type: String, required: true },
    doctor: { type: String, required: true },
    message: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });
  

// Export both schemas
const User = mongoose.model('User', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = {
    User,
    Appointment,
  };