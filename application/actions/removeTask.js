module.exports = ({ taskRepository }) => (id) => {
    // console.log('elimina tarea');
    return taskRepository.delete(id);
};