class CustomTask {
    constructor(taskPosition, name, description, dueDate)
    {
        this.taskPosition = taskPosition;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
    get DueDate() {
        let remains = this.dueDate - new Date();
        return remains;
    }
}
let userTasks = [];
const postToDoTask = document.querySelector('.postToDoTask');
const postDoingTask = document.querySelector('.postDoingTask');
postToDoTask.addEventListener('click', (e) => {
    console.log(e)
});
postDoingTask.addEventListener('click', (e) => {
    console.log(e)
});