module.exports = ({ taskRepository }) => (item) => {
    const id = item.id;
    // console.log('elimina tarea');
    return taskRepository.delete(id);
};