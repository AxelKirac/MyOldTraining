class Filter {
    constructor(button, task)
    {
        this.button = button;
        this.task = task;
    }
}

let FILTERS = [
    new Filter('.dropdown-content-todo > .dropdown-content-checkbox', '.toDo_tasks'),
    new Filter('.dropdown-content-doing > .dropdown-content-checkbox', '.doing_tasks'),
    new Filter('.dropdown-content-done > .dropdown-content-checkbox', '.done_tasks')
];
for(const filter of FILTERS)
{
    let btn = document.querySelector(filter.button)
    let task = document.querySelector(filter.task);
    btn.addEventListener("click", () => {
        if(btn.checked) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}