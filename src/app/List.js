import Store from "./Store";

export default class List extends Store {
  constructor() {
    super();
    this.text = document.getElementById("text");
    this.listBox = document.getElementById("listBox");
    this.taskList;
  }

  display() {
    let tasks = super.getTasksData();
    if (tasks === null) {
      this.taskList = [];
    } else {
      this.taskList = JSON.parse(tasks);
    }

    let htmlCode = "";
    this.taskList.forEach((list, ind) => {
      htmlCode += `<div class='flex items-center bg-gray-100 p-4 mb-4 rounded'>
                            <p class='w-full text-grey-darkest'>${list}</p>
                            <button value='${ind}' name='edit' class='ml-4 mr-2 px-2 py-1 rounded text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white'>
                                Edit
                            </button>
                            <button value='${ind}' name='delete' class='ml-4 mr-2 px-2 py-1 rounded text-red-700 transition-all hover:bg-red-700 hover:text-white'>
                                Delete
                            </button>
                        </div>`;
    });
    this.listBox.innerHTML = htmlCode;
  }

  add() {
    let tasks = this.getTasksData();
    if (tasks === null) {
      this.taskList = [];
    } else {
      this.taskList = JSON.parse(tasks);
    }

    if (this.text.value === "") {
      window.alert("The field is empty");
    } else {
      this.taskList.push(this.text.value);
      this.text.value = "";
      super.setTasksData(this.taskList);
      this.display();
    }
  }

  delete(ind) {
    let tasks = super.getTasksData();
    this.taskList = JSON.parse(tasks);
    this.taskList.splice(ind, 1);
    super.setTasksData(this.taskList);
    this.display();
  }

  edit(ind) {
    /* saveInd.value = ind; */
    let tasks = super.getTasksData();
    this.taskList = JSON.parse(tasks);
    this.text.value = this.taskList[ind];

  }

  save(id) {
    let tasks = super.getTasksData();
    this.taskList = JSON.parse(tasks);
    this.taskList[id] = this.text.value;
    this.text.value = "";
    super.setTasksData(this.taskList);

    this.display();
  }
}
