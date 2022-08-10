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



let x = document.querySelector('.dropdown-content-todo > .dropdown-content-checkbox')
let y = document.querySelector('.toDo_tasks')
function nodisplay1() {

    if(x.checked) {
    y.style.display = 'block';
    }

    else {
        y.style.display = 'none';
    }

}
x.addEventListener("click", nodisplay1);

let a = document.querySelector('.dropdown-content-doing > .dropdown-content-checkbox')
let b = document.querySelector('.doing_tasks')
function nodisplay2() {
    console.log(a)
    if(a.checked) {
    b.style.display = 'block';
    }

    else {
        b.style.display = 'none';
    }

}
a.addEventListener("click", nodisplay2);

let c = document.querySelector('.dropdown-content-done > .dropdown-content-checkbox')
let d = document.querySelector('.done_tasks')
function nodisplay3() {

    if(c.checked) {
        d.style.display = 'block';
    }

    else {
        d.style.display = 'none';
    }

}
c.addEventListener("click", nodisplay3);


