var express = require('express');
var router = express.Router();

const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../../application/actions');

function SimpleTaskRepository() {
  this.items = [];
  this.add = (text) => {
    const newItem = {
      id: this.items.length,
      text,
      status: 'active'
    };
    this.items.push(newItem);
    return newItem;
  };
  this.getAll = () => this.items;
  this.get = (id) => this.items.find(x => x.id == id);
  this.update = (id, data) => {
    console.log(id, data);
    let found = this.items.find(x => x.id == id);
    if (found) {
      found = Object.assign(found, data);
    }
    return found;
  };
  this.delete = (id) => {
    let foundIndex = this.items.findIndex(x => x.id == id);
    if (foundIndex != -1) {
      this.items.splice(foundIndex, 1);
    }
    return foundIndex;
  };
};

const taskRepository = new SimpleTaskRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
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
  console.log(id);
  completeTask(id);
  res.redirect('/');
};
router.get('/complete-task', completeTasksCallback);

const removeTasksCallback = (req, res) => {
  const id = req.query.id;
  console.log(id);
  removeTask(id);
  res.redirect('/');
};
router.get('/remove-task', removeTasksCallback);

module.exports = router;
