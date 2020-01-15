module.exports = ({ taskRepository }) => (id) => {
    const item = taskRepository.get(id);
    const data = {
        text: item.text,
        status: 'completed',
    };
    // console.log('completa tarea');
    return taskRepository.update(id, data);
};