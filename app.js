window.addEventListener('Load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newtodoform = document.querySelector('#new-todo-form');
    
    const username = localStorage.getItem('username') || '';
    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })
})