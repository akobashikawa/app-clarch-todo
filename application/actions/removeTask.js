module.exports = (TaskRepository) => (item) => {
    const id = item.id;
    return TaskRepository.delete(id);
};