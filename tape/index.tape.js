const test = require('tape');

const { SimpleTasksRepository } = require('../application/repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, uncompleteTaskBuilder, removeTaskBuilder } = require('../application/actions');


const taskRepository = new SimpleTasksRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
const uncompleteTask = uncompleteTaskBuilder({ taskRepository });
const removeTask = removeTaskBuilder({ taskRepository });

let tasks = [];
test('lista tareas', async function (t) {
    const actual = tasks = await listTasks();
    const expected = [];
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

let task = {};
test('agrega tarea', async function (t) {
    task = await addTask('Say Hello');
    const actual = task.text;
    const expected = 'Say Hello';
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

test('completa tarea', async function (t) {
    const item = await completeTask(task.id);
    const actual = item.status;
    const expected = 'completed';
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

test('elimina tarea', async function (t) {
    let tasks = await listTasks();
    let len = tasks.length;
    const removed = await removeTask(task.id);
    tasks = await listTasks();
    const actual = tasks.length;
    const expected = len - 1;
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});