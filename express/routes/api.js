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

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await listTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).end(error);
    }
});

router.post('/tasks', async (req, res) => {
    console.log('post task');
    try {
        const text = req.body.text ? req.body.text.trim() : null;
        if (!text) {
            return res.status(500).json({
                message: 'Se requiere text'
            });
        }
        const item = await addTask(text);
        res.json(item);
    } catch (error) {
        res.status(500).end(error);
    }
});

router.put('/tasks-complete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await completeTask(id);
        res.json(item);
    } catch (error) {
        res.status(500).end(error);
    }
});

router.put('/tasks-uncomplete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await uncompleteTask(id);
        res.json(item);
    } catch (error) {
        res.status(500).end(error);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await removeTask(id);
        res.json(item);
    } catch (error) {
        res.status(500).end(error);
    }
});

module.exports = router;
