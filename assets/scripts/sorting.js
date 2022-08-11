class Sorting {
    constructor(name, sort)
    {
        this.query = `.sorting_${name}`;
        this.sort = sort;
    }
}
const TASK_QUERY = [
    '.toDo_tasks > .task',
    '.doing_tasks > .task',
    '.done_tasks > .task'
];
const ALL_PRIORITY = [
    'high',
    'medium',
    'low'
];
const SORTING = [
    new Sorting('name', (tasks) => {
        return [...tasks].sort((a, b) => {
            return a.getAttribute('name').localeCompare(b.getAttribute('name'));
        });
    }),
    new Sorting('timeline', (tasks) => {
        return [...tasks].sort((a, b) => {
            return a.getAttribute('dueDate') - b.getAttribute('dueDate');
        });
    }),
    new Sorting('priority', (tasks) => {
        let ordered = [];
        for(let priority of ALL_PRIORITY)
        {
            const p = [...tasks].filter((v, i) => {
                return v.getAttribute('priority') === priority;
            });
            p.sort((a, b) => {
                return a.getAttribute('dueDate') - b.getAttribute('dueDate');
            });
            ordered.push(...p);
        }
        return ordered;
    })
];
for(const sorting of SORTING)
{
    const sortOption = document.querySelector(sorting.query);
    sortOption.addEventListener('click', () => {
        const sortSpecificTask = (tasks) => {
            const ordered = sorting.sort(tasks);
            ordered.forEach((lm, index) => {
                lm.style.order = index
            });
        };
        for(let t of TASK_QUERY)
        {
            let taskToSort = document.querySelectorAll(t);
            sortSpecificTask(taskToSort);
        }
    });
}