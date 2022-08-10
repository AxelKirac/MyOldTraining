const todoNewTask = document.querySelector('.toDo_newTask');
const doingNewTask = document.querySelector('.doing_newTask');
todoNewTask.addEventListener('click', (e) => {
    let icon = newTaskIcon('todo');
    if(icon !== null)
    {
        if(icon.innerHTML === '-')
        {
            icon.innerHTML = '+';
        }
        else
        {
            icon.innerHTML = '-';
        }
    }
});
doingNewTask.addEventListener('click', (e) => {
    //newTaskIcon('doing');
});

function newTaskIcon(event) {
    let newTaskIcon;
    switch(event)
    {
        case 'todo':
            newTaskIcon = document.querySelector('.toDo_newTask_title > .toDo_newTask_icon');
            break;
        case 'doing':
            newTaskIcon = document.querySelector('.doing_newTask_title > .toDo_newTask_icon');
            break;
        default:
            newTaskIcon = null;
            break;
    }
    return newTaskIcon;
}