module.exports = (TaskRepository) => () => {
    return TaskRepository.getAll();
};