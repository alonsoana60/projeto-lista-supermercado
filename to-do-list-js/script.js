const inputNewTask = document.querySelector('.nome-produto');
const btnNewTask = document.querySelector('.btn-novo-produto');
const taskList = document.querySelector('.nova-lista');
const templateTask = document.querySelector('#template-list');

// funcao adicionar task
function addTask() {
    const value = inputNewTask.value;
    console.log(value);
    
    if (value){
        const novaTask = templateTask.content.cloneNode(true);
        novaTask.querySelector('span').textContent = value;
        novaTask.querySelector('.btn-trash').addEventListener('click', remove);
        taskList.insertBefore(novaTask, taskList.querySelector('li'));
        inputNewTask.value = "";
    }
}


// funcao remover task
function remove (){
    this.parentNode.remove();
}

btnNewTask.addEventListener('click', addTask)

