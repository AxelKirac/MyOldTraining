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
    console.log(x)

    if(x=false) {
    y.style.display = 'none';
    }

    else if (x=true) {
        y.style.display = 'block';
    }

}

x.addEventListener("click", nodisplay1);

