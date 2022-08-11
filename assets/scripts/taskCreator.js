class TaskMaker {
    constructor(taskQuery, name, taskName)
    {
        this.name = name;
        this.taskQuery = taskQuery;
        this.taskName = taskName;
    }
}
const newTaskMaking = [
    new TaskMaker('.postToDoTask', 'todo', 'toDo'),
    new TaskMaker('.postDoingTask', 'doing', 'doing')
];
/*
    Create event listener on our newly made inputs
*/
for(const task of newTaskMaking)
{
    const post = document.querySelector(task.taskQuery);
    post.addEventListener('click', () => {
        let name = document.querySelector(`.${task.taskName}_newTask > .maketask > .name`);
        let priority = document.querySelector(`.${task.taskName}_newTask > .maketask > .priority`);
        let description = document.querySelector(`.${task.taskName}_newTask > .maketask > .description`);
        let dueTo = document.querySelector(`.${task.taskName}_newTask > .maketask > .dueTo`);
        if(name.value.length >= 2 && description.value.length >= 1)
        {
            userTasks.push(new CustomTask(task.name, TASK_ID, name.value, priority.value, description.value, new Date(dueTo.value)));
            name.value = '';
            priority.value = 'low';
            description.value = '';
            dueTo.value = inputActualDateFormat();
            let nameErr = document.querySelector(`.${task.taskName}_newTask > .maketask > .name_error`);
            let descErr = document.querySelector(`.${task.taskName}_newTask > .maketask > .description_error`)
            nameErr.innerHTML = '';
            nameErr.getElementsByClassName.display = 'none';
            descErr.innerHTML = '';
            descErr.getElementsByClassName.display = 'none';
            document.querySelector(`.${task.taskName}_newTask > .maketask`).style.display = 'none';
            document.querySelector(`.${task.taskName}_newTask_title > .${task.taskName}_newTask_icon`).innerHTML = '+';
            pushNewData();
        }
    });
}
for(let query of TASK_QUERY_C)
{
    const t = document.querySelector(query);
    t.ondragover = allowDrop;
    t.ondrop = drop;
}