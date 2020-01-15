var express = require('express');
var router = express.Router();

const { SimpleTasksRepository } = require('../../application/repositories');
const { MongoTasksRepository } = require('../repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, uncompleteTaskBuilder, removeTaskBuilder } = require('../../application/actions');


// const taskRepository = new SimpleTasksRepository();
const taskRepository = new MongoTasksRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
const uncompleteTask = uncompleteTaskBuilder({ taskRepository });
const removeTask = removeTaskBuilder({ taskRepository });

router.get('/', async (req, res) => {
  try {
    const tasks = await listTasks();
    res.render('index', { tasks });
  } catch (error) {
    res.status(500).end(error);
  }
});

router.post('/add-task', async (req, res) => {
  try {
    const text = req.body.text.trim();
    await addTask(text);
    res.redirect('/');
  } catch (error) {
    res.status(500).end(error);
  }
});

router.get('/complete-task', async (req, res) => {
  try {
    const id = req.query.id;
    await completeTask(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).end(error);
  }
});

router.get('/uncomplete-task', async (req, res) => {
  try {
    const id = req.query.id;
    await uncompleteTask(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).end(error);
  }
});

router.get('/remove-task', async (req, res) => {
  try {
    const id = req.query.id;
    await removeTask(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).end(error);
  }
});

module.exports = router;
