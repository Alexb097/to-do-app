
export default class Store {

    constructor() {
        this.storageName = "tasks";
    }

    getTasksData() {
        return localStorage.getItem(this.storageName);
    }

    setTasksData(tasks) {
        localStorage.setItem(this.storageName, JSON.stringify(tasks));
    }
}