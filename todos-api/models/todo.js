const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  desc: { type: String, required: true },
  complete: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
