const express = require('express');

const { createTask, getTasks } = require('../controller/taskController');
const authMiddleware = require('../middleware/AuthMiddleware');

const router = express.Router();

router.post('/add-tasks', authMiddleware ,createTask);

router.get('/get-tasks', authMiddleware, getTasks);


module.exports = router;