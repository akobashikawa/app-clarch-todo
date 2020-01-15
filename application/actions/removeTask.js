module.exports = ({ taskRepository }) => async (id) => {
    try {
        // console.log('elimina tarea');
        return taskRepository.delete(id);
    } catch (error) {
        throw error;
    }
};