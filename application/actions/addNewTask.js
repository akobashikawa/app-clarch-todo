module.exports = function addNewTask(text, TaskRepository) {
    const newItem = { text };
    const repository = new TaskRepository();
    repository.save(newItem);
};