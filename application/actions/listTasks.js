module.exports = ({ taskRepository }) => () => {
    // console.log('lista tareas');
    return taskRepository.getAll();
};