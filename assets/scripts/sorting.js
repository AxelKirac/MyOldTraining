let sorting_timeline = document.querySelector('.sorting_timeline');

sorting_timeline.addEventListener("click", () => {

    const sortSpecificTask = (tasks) => {
        const ordered = [...tasks].sort((a, b) => {
            return a.getAttribute('dueDate') - b.getAttribute('dueDate');
        });

        ordered.forEach((lm, index) => {
            lm.style.order = index
        })

    };

    let toDo = document.querySelectorAll('.toDo_tasks > .task');
    sortSpecificTask(toDo)
    let doing = document.querySelectorAll('.doing_tasks > .task');
    sortSpecificTask(doing)
    let done = document.querySelectorAll('.done_tasks > .task');
    sortSpecificTask(done)

})


let sorting_name = document.querySelector('.sorting_name');

sorting_name.addEventListener("click", () => {

    const sortSpecificTask = (tasks) => {
        const ordered = [...tasks].sort((a, b) => {
            
            return a.getAttribute('name').localeCompare(b.getAttribute('name'))
           
        });

        ordered.forEach((lm, index) => {
            lm.style.order = index
        })

    };

    let toDo = document.querySelectorAll('.toDo_tasks > .task');
    sortSpecificTask(toDo)
    let doing = document.querySelectorAll('.doing_tasks > .task');
    sortSpecificTask(doing)
    let done = document.querySelectorAll('.done_tasks > .task');
    sortSpecificTask(done)

})

let sorting_priority = document.querySelector('.sorting_priority');

sorting_priority.addEventListener("click", () => {

    const sortSpecificTask = (tasks) => {
        
        const low = [...tasks].filter((v, i) => {
            return v.getAttribute('priority')==='low'
        })
        const medium = [...tasks].filter((v, i) => {
            return v.getAttribute('priority')==='medium'
        })
        const high = [...tasks].filter((v, i) => {
            return v.getAttribute('priority')==='high'
        })

        low.sort((a, b) => {
            return a.getAttribute('dueDate') - b.getAttribute('dueDate');
        })

        medium.sort((a, b) => {
            return a.getAttribute('dueDate') - b.getAttribute('dueDate');
        }) 

        high.sort((a, b) => {
            return a.getAttribute('dueDate') - b.getAttribute('dueDate');
        }) 
        
        const merge = [...high, ...medium, ...low]

        merge.forEach((lm, index) => {
            lm.style.order = index
        })

    };

    let toDo = document.querySelectorAll('.toDo_tasks > .task');
    sortSpecificTask(toDo)
    let doing = document.querySelectorAll('.doing_tasks > .task');
    sortSpecificTask(doing)
    let done = document.querySelectorAll('.done_tasks > .task');
    sortSpecificTask(done)

})

