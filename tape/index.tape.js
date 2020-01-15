const test = require('tape');

const { SimpleTasksRepository } = require('../application/repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../application/actions');


const taskRepository = new SimpleTasksRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
const removeTask = removeTaskBuilder({ taskRepository });

let tasks = [];
test('lista tareas', function (t) {
    const actual = tasks = listTasks();
    const expected = [];
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

let task = {};
test('agrega tarea', function (t) {
    task = addTask('Say Hello');
    const actual = task.text;
    const expected = 'Say Hello';
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

test('completa tarea', function (t) {
    const actual = completeTask(task.id).status;
    const expected = 'completed';
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});

test('elimina tarea', function (t) {
    const len = listTasks().length;
    const removed = removeTask(task.id);
    const actual = listTasks().length;
    const expected = len - 1;
    const message = 'ok'
    t.deepEqual(actual, expected, message);
    t.end();
});