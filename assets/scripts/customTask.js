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
    setCategory(newCat)
    {
        this.category = newCat;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.getAttribute('value'));
}
  
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let TARGET = ev.target;
    let CONTENT = ev.target.getAttribute('content');
    if(!CONTENT)
    {
        CONTENT = ev.target.closest('.task').parentNode.getAttribute('content');
        TARGET = document.querySelector(`.${CONTENT === 'todo' ? 'toDo' : CONTENT}_tasks`);
    }
    data = Number(data);
    let category;
    for(let i = 0; i < userTasks.length; i++)
    {
        if(userTasks[i].id == data)
        {
            category = userTasks[i].category;
            userTasks[i].setCategory(CONTENT);
            break;
        }
    }
    if(category !== undefined && category !== null)
    {
        category = category === 'todo' ? 'toDo' : category;
        TARGET.appendChild(document.querySelector(`.${category}_tasks > .task[value='${data}']`));
        saveDatas();
    }
}