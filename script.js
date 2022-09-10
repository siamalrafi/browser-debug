const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}
const submitHandler = () => {

    const todos = JSON.parse(localStorage.getItem('TODOS'));
    const inputFiled = document.getElementById('todo-text');

    const inputText = inputFiled.value;
    inputFiled.value = '';
    // inputText = '';
    if (!todos) {
        const todolist = [
            {
                title: inputText,
                completed: false,
            }
        ];
        localStorage.setItem('TODOS', JSON.stringify(todolist));
    } else {
        const todolist = [
            ...todos,
            {
                title: inputText,
                completed: false,
            }
        ];
        localStorage.setItem('TODOS', JSON.stringify(todolist));
    }
    render();
};
const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODOS'))
    const ul = document.getElementById('todo-list');

    ul.innerHTML = '';

    todos.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('py-2');

        li.innerText = item.title;
        ul.appendChild(li);
    });
}
render();

const handlerClearAll = () => {
    localStorage.removeItem('TODOS');
    render();

}

