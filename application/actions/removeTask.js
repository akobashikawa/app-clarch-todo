module.exports = function removeTask(TaskRepository, item) {
    return TaskRepository.delete(item);
};