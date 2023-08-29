const incluirTask = document.querySelector('.nome-produto');
const btnTask = document.querySelector('.btn-novo-produto');
const newList = document.querySelector('.nova-lista');
// const actionList = document.querySelector('.item-acao');
const templateTask = document.querySelector('#template-list');

// console.log(actionList);

function check() {
    const item = this.parendNode.parendNode;
    if (this.checked){
        item.classList.remove('.item-acao')
        item.classList.add('.modelo-sucesso')
    } else {
        item.classList.remove('.modelo-sucesso')
        item.classList.add('.item-acao')
    }
}

function remove(){
    this.parendNode.remove()
}

function addTask(){
    const value = incluirTask.value;
    console.log(value);
    if (value){
        const novoItemTask = templateTask.content.cloneNode(true);
        novoItemTask.querySelector("span").textContent = value;
        novoItemTask.querySelector('input[type="checkbox"]').addEventListener("click", check);
        novoItemTask.querySelector('button').addEventListener("click", remove);
        newList.insertBefore(novoItemTask, newList.querySelector('li'));
        incluirTask.value="";
    }
}

// actionList.querySelector('input[type="checkbox"]').addEventListener("click", check);

// actionList.querySelector("button").addEventListener("click", remove);

btnTask.addEventListener("click", addTask)