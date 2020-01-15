console.log('Clean Architecture To Do App');

const { SimpleTasksRepository } = require('../application/repositories');
const { addTaskBuilder, listTasksBuilder, completeTaskBuilder, removeTaskBuilder } = require('../application/actions');


const taskRepository = new SimpleTasksRepository();

const listTasks = listTasksBuilder({ taskRepository });
const addTask = addTaskBuilder({ taskRepository });
const completeTask = completeTaskBuilder({ taskRepository });
const removeTask = removeTaskBuilder({ taskRepository });

(async () => {
    const tasks = await listTasks();

    const a = await addTask('Say Hello');
    console.log(tasks);
    const b = await addTask('Dí Hola');
    console.log(tasks);

    const c = await completeTask(a.id);
    console.log(tasks);

    const d = await removeTask(a.id);
    console.log(tasks);
})();
