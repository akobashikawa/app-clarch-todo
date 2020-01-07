module.exports = function completeTask(TaskRepository, item) {
    item.status = 'completed';
    return TaskRepository.update(item);
};