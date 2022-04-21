import List from "./List";

const list = new List();
const add = document.getElementById("add");
const save = document.getElementById("save");
const listBox = document.getElementById("listBox");

window.addEventListener('DOMContentLoaded', () => {
    list.display();
});

add.addEventListener("click", () => {
  list.add();
});

listBox.addEventListener("click", (e) => {
  if (e.target.name === "delete") {
    list.delete(e.target.value);
  }

  if (e.target.name === "edit") {
    list.edit(e.target.value);
    add.style.display = "none";
    save.setAttribute("value", e.target.value);
    save.style.display = "block";
  }
});

save.addEventListener("click", (e) => {
  list.save(e.target.value);
  add.style.display = "block";
  save.setAttribute("value", '');
  save.style.display = "none";
});
