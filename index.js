console.log('Clean Architecture To Do App');

const { addNewTask } = require('./application/actions');

const TaskRepository = function () {
    this.save = (text) => console.log('task added');
};

const task_a = addNewTask('Say Hello', TaskRepository);