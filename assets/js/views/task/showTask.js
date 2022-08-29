import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"
import { populateTask } from "./populateTask.js"

export const showTask = (NewApi, id = null) => {
    buildTask()

    id ? populateTask(id, NewApi) : buildDateInput()
}