module.exports = (TaskRepository) => (text) => {
    return TaskRepository.add(text);
};