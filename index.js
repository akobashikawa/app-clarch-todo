console.log('Clean Architecture To Do App');

const { addTask, listTasks, completeTask, removeTask } = require('./application/actions');

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

const TaskRepository = new SimpleTaskRepository();


const tasks = listTasks(TaskRepository)();
console.log(tasks);

const a = addTask(TaskRepository)('Say Hello');
const b = addTask(TaskRepository)('Dí Hola');
console.log(tasks);

const c = completeTask(TaskRepository)(a);
console.log(tasks);

const d = removeTask(TaskRepository)(a);
console.log(tasks);
