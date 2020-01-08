module.exports = (TaskRepository) => (item) => {
    const id = item.id;
    const data = {
        text: item.text,
        status: 'completed',
    }
    return TaskRepository.update(item);
};