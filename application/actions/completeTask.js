module.exports = ({ taskRepository }) => (item) => {
    const id = item.id;
    const data = {
        text: item.text,
        status: 'completed',
    }
    // console.log('completa tarea');
    return taskRepository.update(id, data);
};