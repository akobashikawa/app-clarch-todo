module.exports = (TaskRepository) => () => {
    console.log('lista tareas');
    return TaskRepository.getAll();
};