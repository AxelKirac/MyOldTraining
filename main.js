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
        return (this.dueDate - new Date(inputActualDateFormat())) / 86400000;
    }
}
function loadDatas()
{
    let taskId = Number(localStorage.getItem('taskId'));
    if(taskId)
    {
        TASK_ID = taskId;
    }
    let taskNbr = Number(localStorage.getItem('userTasks.length'));
    for(let i = 0; i < taskNbr; i++)
    {
        userTasks.push(new CustomTask(localStorage.getItem(`userTasks[${i}].id`),
        localStorage.getItem(`userTasks[${i}].category`),
        localStorage.getItem(`userTasks[${i}].name`),
        localStorage.getItem(`userTasks[${i}].priority`),
        localStorage.getItem(`userTasks[${i}].description`),
        new Date(localStorage.getItem(`userTasks[${i}].dueDate`))));
        pushNewElement(userTasks[userTasks.length - 1]);
    }
}
function saveDatas()
{
    localStorage.clear();
    localStorage.setItem('taskId', TASK_ID);
    let i = 0;
    localStorage.setItem('userTasks.length', userTasks.length);
    for(let userTask of userTasks)
    {
        localStorage.setItem(`userTasks[${i}].id`, userTask.id);
        localStorage.setItem(`userTasks[${i}].category`, userTask.category);
        localStorage.setItem(`userTasks[${i}].name`, userTask.name);
        localStorage.setItem(`userTasks[${i}].priority`, userTask.priority);
        localStorage.setItem(`userTasks[${i}].description`, userTask.description);
        localStorage.setItem(`userTasks[${i++}].dueDate`, inputDateFormat(userTask.dueDate));
    }
}
// Get the input Date format
function inputActualDateFormat()
{
    let getTodayDate = new Date();
    let d = getTodayDate.getDate();
    let m = getTodayDate.getMonth() + 1;
    return `${getTodayDate.getFullYear()}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`;
}
function inputDateFormat(getTodayDate)
{
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
function pushNewElement(newData)
{
    console.log(newData)
    let nwTask = document.createElement('article');
    nwTask.classList.add('task');
    nwTask.setAttribute('value', newData.id);
    let h1 = document.createElement('h1');
    h1.classList.add('task_name');
    h1.innerHTML = newData.name;
    nwTask.appendChild(h1);
    let desc = document.createElement('p');
    desc.classList.add('task_description');
    desc.innerHTML = newData.description;
    nwTask.appendChild(desc);
    let limit = document.createElement('p');
    limit.classList.add('task_delay');
    limit.innerHTML = `In ${newData.DueDate} days.`;
    nwTask.appendChild(limit);
    let taskElem = document.querySelector(newData.category === 'doing' ? '.doing_tasks' : '.toDo_tasks');
    taskElem.appendChild(nwTask);
}
function pushNewData()
{
    console.log('Array')
    console.log(userTasks)
    let newData = userTasks[userTasks.length - 1];
    pushNewElement(newData);
    saveDatas();
}