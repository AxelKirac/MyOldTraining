import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"

export const showTask = (id = null, NewApi) => {
    // const event = NewApi.getEvent()



    const firstTask = 1

    buildTask()
    buildDateInput(firstTask)
}