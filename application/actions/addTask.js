module.exports = (TaskRepository) => (text) => {
    // console.log('agrega tarea');
    return TaskRepository.add(text);
};