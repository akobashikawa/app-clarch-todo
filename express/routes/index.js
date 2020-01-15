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

const listTasksCallback = (req, res) => {
  const tasks = listTasks();
  res.render('index', { tasks });
};
router.get('/', listTasksCallback);

const addTasksCallback = (req, res) => {
  const text = req.body.text.trim();
  addTask(text);
  const tasks = listTasks();
  res.redirect('/');
};
router.post('/add-task', addTasksCallback);

const completeTasksCallback = (req, res) => {
  const id = req.query.id;
  completeTask(id);
  res.redirect('/');
};
router.get('/complete-task', completeTasksCallback);

const uncompleteTasksCallback = (req, res) => {
  const id = req.query.id;
  uncompleteTask(id);
  res.redirect('/');
};
router.get('/uncomplete-task', uncompleteTasksCallback);

const removeTasksCallback = (req, res) => {
  const id = req.query.id;
  removeTask(id);
  res.redirect('/');
};
router.get('/remove-task', removeTasksCallback);

module.exports = router;
