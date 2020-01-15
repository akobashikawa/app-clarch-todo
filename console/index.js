console.log('Clean Architecture To Do App');

const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../application/actions');

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

const tasks = listTasks();

const a = addTask('Say Hello');
console.log(tasks);
const b = addTask('Dí Hola');
console.log(tasks);

const c = completeTask(a.id);
console.log(tasks);

const d = removeTask(a.id);
console.log(tasks);
