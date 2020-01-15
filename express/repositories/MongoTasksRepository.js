require('dotenv').config();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(`${process.env.MONGO_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const TaskSchema = new Schema({ text: String, status: String });
const Task = mongoose.model('Task', TaskSchema);

module.exports = function MongoTasksRepository() {
    this.items = [];
    this.add = async (data) => {
        const newItem = new Task(data);
        try {
            const result = await newItem.save();
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    this.getAll = async () => {
        try {
            const result = await Task.find();
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    this.get = async (id) => {
        try {
            console.log(id);
            const result = await Task.findById(id);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    this.update = async (id, data) => {
        try {
            console.log(id, data);
            const result = await Task.findByIdAndUpdate(id, { $set: data }, { new: true });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
    this.delete = async (id) => {
        try {
            const result = await Task.findByIdAndRemove(id);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
};