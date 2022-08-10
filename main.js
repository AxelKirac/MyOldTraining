class CustomTask {
    constructor(category, id, name, priority, description, dueDate)
    {
        this.id = id;
        this.category = category;
        this.name = name;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
    }
    get DueDate() {
        let remains = this.dueDate - new Date();
        return remains;
    }
}
function loadDatas()
{
    let taskId = localStorage.getItem('taskId');
    if(taskId)
    {
        TASK_ID = taskId;
    }
    let user_Tasks = localStorage.getItem('userTasks');
    if(user_Tasks)
    {
        userTasks = user_Tasks;
    }
}
function saveDatas()
{
    localStorage.setItem('taskId', TASK_ID);
    localStorage.setItem('userTasks', userTasks);
}
// Get the input Date format
function inputActualDateFormat()
{
    let getTodayDate = new Date();
    let d = getTodayDate.getDate();
    let m = getTodayDate.getMonth() + 1;
    return `${getTodayDate.getFullYear()}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
}
// Initialize all DueTo with today's date
const allDueTo = document.querySelectorAll('.dueTo');
for(let dT of allDueTo)
{
    dT.value = inputActualDateFormat();
}

let TASK_ID = 0;
let userTasks = [];
loadDatas();

const postToDoTask = document.querySelector('.postToDoTask');
postToDoTask.addEventListener('click', () => {
    let name = document.querySelector('.toDo_newTask > .maketask > .name');
    let priority = document.querySelector('.toDo_newTask > .maketask > .priority');
    let description = document.querySelector('.toDo_newTask > .maketask > .description');
    let dueTo = document.querySelector('.toDo_newTask > .maketask > .dueTo');
    if(name.value.length >= 2 && description.value.length >= 1)
    {
        userTasks.push(new CustomTask('todo', TASK_ID++, name.value, priority.value, description.value, new Date(dueTo.value)));
        name.value = '';
        priority.value = 'low';
        description.value = '';
        dueTo.value = inputActualDateFormat();
        let nameErr = document.querySelector('.toDo_newTask > .maketask > .name_error');
        let descErr = document.querySelector('.toDo_newTask > .maketask > .description_error')
        nameErr.innerHTML = '';
        nameErr.getElementsByClassName.display = 'none';
        descErr.innerHTML = '';
        descErr.getElementsByClassName.display = 'none';
        document.querySelector('.toDo_newTask > .maketask').style.display = 'none';
        document.querySelector('.toDo_newTask_title > .toDo_newTask_icon').innerHTML = '+';
        pushNewData();
    }
});

const postDoingTask = document.querySelector('.postDoingTask');
postDoingTask.addEventListener('click', () => {
    let name = document.querySelector('.doing_newTask > .maketask > .name').value;
    let priority = document.querySelector('.doing_newTask > .maketask > .priority').value;
    let description = document.querySelector('.doing_newTask > .maketask > .description').value;
    let dueTo = document.querySelector('.doing_newTask > .maketask > .dueTo').value;
    if(name.value.length >= 2 && description.value.length >= 1)
    {
        userTasks.push(new CustomTask('doing', TASK_ID++, name.value, priority.value, description.value, new Date(dueTo.value)));
        name.value = '';
        priority.value = 'low';
        description.value = '';
        dueTo.value = inputActualDateFormat();
        let nameErr = document.querySelector('.doing_newTask > .maketask > .name_error');
        let descErr = document.querySelector('.doing_newTask > .maketask > .description_error')
        nameErr.innerHTML = '';
        nameErr.getElementsByClassName.display = 'none';
        descErr.innerHTML = '';
        descErr.getElementsByClassName.display = 'none';
        document.querySelector('.doing_newTask > .maketask').style.display = 'none';
        document.querySelector('.doing_newTask_title > .doing_newTask_icon').innerHTML = '+';
        pushNewData();
    }
});

function pushNewData()
{
    let newData = userTasks[userTasks.length - 1];

    saveDatas();
}