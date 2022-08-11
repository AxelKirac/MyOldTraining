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
        userTasks.push(new CustomTask(
        localStorage.getItem(`userTasks[${i}].category`),
        localStorage.getItem(`userTasks[${i}].id`),
        localStorage.getItem(`userTasks[${i}].name`),
        localStorage.getItem(`userTasks[${i}].priority`),
        localStorage.getItem(`userTasks[${i}].description`),
        new Date(localStorage.getItem(`userTasks[${i}].dueDate`))));
        pushNewElement(userTasks[i]);
    }
}
function saveDatas()
{
    localStorage.clear();
    localStorage.setItem('userTasks.length', userTasks.length);
    if(userTasks.length == 0)
    {
        TASK_ID = 0;
    }
    localStorage.setItem('taskId', TASK_ID);
    let i = 0;
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
function pushNewElement(newData)
{
    let nwTask = document.createElement('article');
    nwTask.classList.add('task');
    nwTask.setAttribute('value', newData.id);

    let dv = document.createElement('div');
    dv.classList.add('task_delete');
    dv.innerHTML = 'X';
    dv.setAttribute('value', newData.id);
    dv.addEventListener('click', (e) => {
        removeElement(e.target.getAttribute('value'), true);
    });
    nwTask.appendChild(dv);

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
    dv.setAttribute('value', newData.DueDate);
    limit.innerHTML = `In ${newData.DueDate} days.`;
    nwTask.appendChild(limit);

    let taskElem = document.querySelector(newData.category === 'doing' ? '.doing_tasks' : '.toDo_tasks');
    taskElem.appendChild(nwTask);
}
function removeElement(id, removeTask = false)
{
    for(let utask of userTasks)
    {
        if(utask.id == id)
        {
            let cat = utask.category;
            if(cat === 'todo')
            {
                let task = document.querySelector(`.toDo_tasks > .task[value='${id}']`);
                let elemList = document.querySelector('.toDo_tasks');
                elemList.removeChild(task);
            }
            else if(cat === 'doing')
            {
                let task = document.querySelector(`.doing_tasks > .task[value='${id}]'`);
                let elemList = document.querySelector('.doing_tasks');
                elemList.removeChild(task);
            }
            else
            {
                let task = document.querySelector(`.done_tasks > .task[value='${id}']`);
                let elemList = document.querySelector('.done_tasks');
                elemList.removeChild(task);
            }
            if(removeTask)
            {
                userTasks = userTasks.filter((x) => {
                    return x.id !== id;
                });
                saveDatas();
            }
            break;
        }
    }
}
function pushNewData()
{
    let newData = userTasks[userTasks.length - 1];
    pushNewElement(newData);
    saveDatas();
}