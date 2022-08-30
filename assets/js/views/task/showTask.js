import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"
import { populateTask } from "./populateTask.js"
import { newDateButtonListener } from "../../controllers/newDateButtonListener.js"

export const showTask = (NewApi, id = null) => {
    buildTask()

    id ? populateTask(id, NewApi) : buildDateInput()

    const addDateButton = document.getElementById('event-date-add')
    newDateButtonListener(addDateButton)
}