const todoNewTask = document.querySelector('.toDo_newTask > .toDo_newTask_title');
const doingNewTask = document.querySelector('.doing_newTask > .doing_newTask_title');
todoNewTask.addEventListener('click', (e) => {
    toggleIcon('todo');
});
doingNewTask.addEventListener('click', (e) => {
    toggleIcon('doing');
});

function toggleIcon(event) {
    let icon = newTaskIcon(event);
    if(icon !== null)
    {
        if(icon.innerHTML === '-')
        {
            icon.innerHTML = '+';
            toggleDropdown(event, false);
        }
        else
        {
            icon.innerHTML = '-';
            toggleDropdown(event, true);
        }
    }
}
function toggleDropdown(event, isVisible) {
    let drop = newTaskDropdown(event);
    if(drop !== null)
    {
        if(isVisible)
        {
            drop.style.display = 'flex';
        }
        else
        {
            drop.style.display = 'none';
        }
    }
}
function newTaskDropdown(event) {
    let newTaskDrp;
    switch(event)
    {
        case 'todo':
            newTaskDrp = document.querySelector('.toDo_newTask > .maketask');
            break;
        case 'doing':
            newTaskDrp = document.querySelector('.doing_newTask > .maketask');
            break;
        default:
            newTaskDrp = null;
            break;
    }
    return newTaskDrp;

}
function newTaskIcon(event) {
    let newTaskIcn;
    switch(event)
    {
        case 'todo':
            newTaskIcn = document.querySelector('.toDo_newTask_title > .toDo_newTask_icon');
            break;
        case 'doing':
            newTaskIcn = document.querySelector('.doing_newTask_title > .doing_newTask_icon');
            break;
        default:
            newTaskIcn = null;
            break;
    }
    return newTaskIcn;
}