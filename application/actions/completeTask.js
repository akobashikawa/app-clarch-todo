module.exports = ({ taskRepository }) => async (id) => {
    try {
        const item = await taskRepository.get(id);
        const data = {
            text: item.text,
            status: 'completed',
        };
        // console.log('completa tarea');
        return taskRepository.update(id, data);
    } catch (error) {
        throw error;
    }
};