const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector("#btn-add-task");
const listTask = document.querySelector("#list-task");
// const itemTask = document.querySelector("#item-task");
const templateItemTask = document.querySelector("#template-item-task");

// function check() {
//   const item = this.parentNode.parentNode.parentNode;
//   if (this.checked) {
//     // itemTask.classList.remove("list-group-item-light");
//     // itemTask.classList.add("list-group-item-success");
//     item.classList.remove("list-group-item-light");
//     item.classList.add("list-group-item-success");
//   } else {
//     // itemTask.classList.remove("list-group-item-success");
//     // itemTask.classList.add("list-group-item-light");
//     item.classList.remove("list-group-item-success");
//     item.classList.add("list-group-item-light");
//   }
// }

function remove() {
  this.parentNode.remove();
}

function addTask() {
  const value = inputTask.value;
  console.log("value", value);
  if (value) {
    const newItemTask = templateItemTask.content.cloneNode(true);
    newItemTask.querySelector("span").textContent = value;
    newItemTask.querySelector('input[type="checkbox"]')addEventListener("click", check);
    newItemTask.querySelector("button").addEventListener("click", remove);
    // listTask.appendChild(newItemTask);
    listTask.insertBefore(newItemTask, listTask.querySelector("li"));
    inputTask.value = "";
  }
}

// itemTask
//   .querySelector('input[type="checkbox"]')
//   .addEventListener("click", check);

// itemTask.querySelector("button").addEventListener("click", remove);

btnAddTask.addEventListener("click", addTask);

/*
  Tarefa:
  Criar um app para lista de compras
  esse app precisa ter:
    um input para o item
    um input para a quantidade
    um select para a unidade de medida
*/
