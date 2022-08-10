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



let todobutton = document.querySelector('.dropdown-content-todo > .dropdown-content-checkbox')
let todotasks = document.querySelector('.toDo_tasks')
function nodisplaytodo() {

    if(todobutton.checked) {
    todotasks.style.display = 'block';
    }

    else {
        todotasks.style.display = 'none';
    }

}
todobutton.addEventListener("click", nodisplaytodo);

let doingbutton = document.querySelector('.dropdown-content-doing > .dropdown-content-checkbox')
let doingtasks = document.querySelector('.doing_tasks')
function nodisplaydoing() {
    if(doingbutton.checked) {
    doingtasks.style.display = 'block';
    }

    else {
        doingtasks.style.display = 'none';
    }

}
doingbutton.addEventListener("click", nodisplaydoing);

let donebutton = document.querySelector('.dropdown-content-done > .dropdown-content-checkbox')
let donetasks = document.querySelector('.done_tasks')
function nodisplaydone() {

    if(donebutton.checked) {
        donetasks.style.display = 'block';
    }

    else {
        donetasks.style.display = 'none';
    }

}
donebutton.addEventListener("click", nodisplaydone);


