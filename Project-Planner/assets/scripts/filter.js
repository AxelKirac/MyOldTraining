class Filter {
    constructor(button, img, task)
    {
        this.button = button;
        this.img = img;
        this.task = task;
    }
}
const FILTERS = [
    new Filter('.dropdown-content-todo', '.dropdown-content-checkbox', '.toDo'),
    new Filter('.dropdown-content-doing', '.dropdown-content-checkbox', '.doing'),
    new Filter('.dropdown-content-done', '.dropdown-content-checkbox', '.done')
];
for(const filter of FILTERS)
{
    let btn = document.querySelector(filter.button);
    let img = document.querySelector(`${filter.button} > ${filter.img}`);
    let task = document.querySelector(filter.task);
    btn.addEventListener("click", () => {
        let actualValue = img.getAttribute('value') === 'true' ? 'false' : 'true';
        img.setAttribute('value', actualValue);
        let darkAppend = dark ? '-dark' : '';
        let imgPath = `assets/img/${actualValue === 'true' ? 'eye-icon' : 'closed-eye-icon'}${darkAppend}.png`;
        img.setAttribute('src', imgPath);
        img.setAttribute('alt', actualValue === 'true' ? 'X' : 'V');
        if(actualValue === 'true') {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });
}