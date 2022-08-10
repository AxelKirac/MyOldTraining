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
let todotasks = document.querySelector('.toDo_tasks');
todobutton.addEventListener("click", () => {
    noDisplayBlock(todobutton, todotasks);
});

let doingbutton = document.querySelector('.dropdown-content-doing > .dropdown-content-checkbox')
let doingtasks = document.querySelector('.doing_tasks');
doingbutton.addEventListener("click", () => {
    noDisplayBlock(doingbutton, doingtasks);
});

let donebutton = document.querySelector('.dropdown-content-done > .dropdown-content-checkbox')
let donetasks = document.querySelector('.done_tasks');
donebutton.addEventListener("click", () => {
    noDisplayBlock(donebutton, donetasks);
});

function noDisplayBlock(btn, task) {
    if(btn.checked) {
        task.style.display = 'block';
    }
    else {
        task.style.display = 'none';
    }

}