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
        Number(localStorage.getItem(`userTasks[${i}].id`)),
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
        localStorage.setItem(`userTasks[${i}].dueDate`, inputDateFormat(userTask.dueDate));
        i++;
    }
}