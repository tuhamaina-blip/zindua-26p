const inputField = document.querySelector('#todo-input');
const addButton = document.getElementById('add-btn');
const todolist = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {
    const taskText = inputField.ariaValueMax;

    if (taskText.trim () === '') {
        alert('Please add task first!')
        return
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    todolist.appendChild(newTask);
})


