module.exports = ({ taskRepository }) => (id) => {
    const item = taskRepository.get(id);
    const data = {
        text: item.text,
        status: 'uncompleted',
    };
    // console.log('completa tarea');
    return taskRepository.update(id, data);
};