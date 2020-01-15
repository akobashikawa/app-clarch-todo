var express = require('express');
var router = express.Router();

const { SimpleTasksRepository } = require('../../application/repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, uncompleteTaskBuilder, removeTaskBuilder } = require('../../application/actions');


const taskRepository = new SimpleTasksRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
const uncompleteTask = uncompleteTaskBuilder({ taskRepository });
const removeTask = removeTaskBuilder({ taskRepository });

router.get('/', (req, res) => {
  const tasks = listTasks();
  res.render('index', { tasks });
});

router.post('/add-task', (req, res) => {
  const text = req.body.text.trim();
  addTask(text);
  const tasks = listTasks();
  res.redirect('/');
});

router.get('/complete-task', (req, res) => {
  const id = req.query.id;
  completeTask(id);
  res.redirect('/');
});

router.get('/uncomplete-task', (req, res) => {
  const id = req.query.id;
  uncompleteTask(id);
  res.redirect('/');
});

router.get('/remove-task', (req, res) => {
  const id = req.query.id;
  removeTask(id);
  res.redirect('/');
});

module.exports = router;
