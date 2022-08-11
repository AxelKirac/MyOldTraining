class Filter {
    constructor(button, task)
    {
        this.button = button;
        this.task = task;
    }
}
const FILTERS = [
    new Filter('.dropdown-content-todo > .dropdown-content-checkbox', '.toDo'),
    new Filter('.dropdown-content-doing > .dropdown-content-checkbox', '.doing'),
    new Filter('.dropdown-content-done > .dropdown-content-checkbox', '.done')
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