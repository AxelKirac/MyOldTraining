import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"
import { populateTask } from "./populateTask.js"

export const showTask = (id = null, NewApi) => {
    buildTask()

    id ? populateTask(id, NewApi) : initNewTask()
}

const initNewTask = () => {
    const firstTask = 1

    buildDateInput(firstTask)
}