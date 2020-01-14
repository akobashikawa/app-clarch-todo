module.exports = (TaskRepository) => (item) => {
    const id = item.id;
    // console.log('elimina tarea');
    return TaskRepository.delete(id);
};