const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: 'User' 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Low', 'Medium', 'High', 'Completed'], 
    required: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Task', taskSchema);
