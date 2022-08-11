function inputActualDateFormat()
{
    return inputDateFormat(new Date());
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
    nwTask.classList.add(dark ? 'dark' : 'light');
    nwTask.setAttribute('value', newData.id);
    nwTask.setAttribute('name', newData.name);
    nwTask.setAttribute('priority', newData.priority);
    nwTask.setAttribute('dueDate', newData.DueDate);
    nwTask.draggable = true;
    nwTask.ondragstart = drag;

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
    const getLanguage = LANGUAGE_DB[document.querySelector('#languages').value]['DATE_WRITE'];
    limit.innerHTML = getLanguage(newData.DueDate);
    nwTask.appendChild(limit);
    
    let taskElem = document.querySelector(newData.category === 'doing' ? '.doing_tasks' : newData.category === 'todo' ? '.toDo_tasks' : '.done_tasks');
    taskElem.appendChild(nwTask);
}
function removeElement(id, removeTask = false)
{
    id = Number(id);
    for(let utask of userTasks)
    {
        if(utask.id == id)
        {
            let elemList = document.querySelector(`.${utask.Category}_tasks`);
            elemList.removeChild(document.querySelector(`.${utask.Category}_tasks > .task[value='${id}']`));
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
    TASK_ID++;
    let newData = userTasks[userTasks.length - 1];
    pushNewElement(newData);
    saveDatas();
}