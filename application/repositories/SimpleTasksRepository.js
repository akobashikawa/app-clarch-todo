module.exports = function SimpleTasksRepository() {
    this.items = [];
    this.add = (text) => {
        const newItem = {
            id: this.items.length,
            text,
            status: 'active'
        };
        this.items.push(newItem);
        return newItem;
    };
    this.getAll = () => this.items;
    this.get = (id) => this.items.find(x => x.id == id);
    this.update = (id, data) => {
        console.log(id, data);
        let found = this.items.find(x => x.id == id);
        if (found) {
            found = Object.assign(found, data);
        }
        return found;
    };
    this.delete = (id) => {
        let foundIndex = this.items.findIndex(x => x.id == id);
        if (foundIndex != -1) {
            this.items.splice(foundIndex, 1);
        }
        return foundIndex;
    };
};
