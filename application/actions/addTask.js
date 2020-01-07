module.exports = function addTask(TaskRepository, text) {
    return TaskRepository.add(text);
};