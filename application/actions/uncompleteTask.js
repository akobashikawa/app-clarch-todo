module.exports = ({ taskRepository }) => async (id) => {
    try {
        const item = await taskRepository.get(id);
        console.log(item);
        const data = {
            text: item.text,
            status: 'uncompleted',
        };
        // console.log('descompleta tarea');
        return taskRepository.update(id, data);
    } catch (error) {
        throw error;
    }
};