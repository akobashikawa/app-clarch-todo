module.exports = ({ taskRepository }) => (text) => {
    // console.log('agrega tarea');
    const data = {
        text,
        status: 'uncompleted'
    };
    return taskRepository.add(data);
};