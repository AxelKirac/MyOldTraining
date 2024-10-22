import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"
import { populateTask } from "./populateTask.js"
import { newDateButtonListener } from "../../controllers/newDateButtonListener.js"
import { taskValidateButtonListener } from "../../controllers/taskValidateButtonListener.js"

export const showTask = (NewApi, id = null) => {

    buildTask()

    id ? populateTask(id, NewApi) : buildDateInput()

    const addDateButton = document.getElementById('event-date-add')
    const validateButton = document.getElementById(('event-validate'))

    newDateButtonListener(addDateButton)
    taskValidateButtonListener(validateButton, NewApi, id)
}