module.exports = (TaskRepository) => (item) => {
    const id = item.id;
    const data = {
        text: item.text,
        status: 'completed',
    }
    console.log('completa tarea');
    return TaskRepository.update(id, data);
};