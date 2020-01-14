module.exports = ({ taskRepository }) => (text) => {
    // console.log('agrega tarea');
    return taskRepository.add(text);
};