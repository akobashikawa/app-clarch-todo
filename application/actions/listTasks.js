module.exports = ({ taskRepository }) => async () => {
    try {
        // console.log('lista tareas');
        return taskRepository.getAll();
    } catch (error) {
        throw error;
    }
};