module.exports = function listTasks(TaskRepository) {
    return TaskRepository.getAll();
};