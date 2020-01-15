module.exports = ({ taskRepository }) => async (text) => {
    try {
        // console.log('agrega tarea');
        const data = {
            text,
            status: 'uncompleted'
        };
        return taskRepository.add(data);
    } catch (error) {
        throw error;
    }
};