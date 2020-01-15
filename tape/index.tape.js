const test = require('tape');

const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../application/actions');

function TestTaskRepository() {
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

const taskRepository = new TestTaskRepository();

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