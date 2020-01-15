console.log('Clean Architecture To Do App');

const { SimpleTasksRepository } = require('../application/repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../application/actions');


const taskRepository = new SimpleTasksRepository();

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
