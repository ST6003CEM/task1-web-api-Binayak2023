const express = require('express');
const jwt = require('jsonwebtoken');
const Todo = require('../models/todo');
const User = require('../models/user');

const router = express.Router();

// Authenticate user
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Invalid user');
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Get all todos
router.get('/', authenticateUser, async (req, res) => {
    try {
      const todos = await Todo.find({ user: req.user._id });
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete((res,req,next) => {
    Todo.delete()
     .then((result) => {
        res.json(result)
     })
     .catch(next)
});

router.post((req , res , next) => {
    Todo.create(req.body)
    .then((todos) => {
        res.status(201).json(todos)
    })
    .catch(next)
});

  