import { buildTask } from "./buildTask.js"
import { buildDateInput } from "./buildDateInput.js"

export const showTask = (id = null, NewApi) => {
    buildTask()

    id ? populateTask(id, NewApi) : initNewTask()
}

const initNewTask = () => {
    const firstTask = 1

    buildDateInput(firstTask)
}

const populateTask = async (id, NewApi) => {
    const event = await NewApi.getEvent(id)

    updateAuthorInput(event.author)
    updateEventNameInput(event.name)
    updateEventDescriptionInput(event.description)
}

const updateAuthorInput = (author) => {
    const authorNameInput = document.getElementById('event-author-input')

    authorNameInput.value = author
}

const updateEventNameInput = (eventName) => {
    const eventNameInput = document.getElementById('event-name-input')

    eventNameInput.value = eventName
}

const updateEventDescriptionInput = (eventDescription) => {
    const eventDescriptionInput = document.getElementById('event-description-input')

    eventDescriptionInput.value = eventDescription
}