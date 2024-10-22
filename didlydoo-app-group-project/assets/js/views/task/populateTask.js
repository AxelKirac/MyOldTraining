import { populateTaskDates } from "./populateTaskDates.js"

export const populateTask = async (id, NewApi) => {
    const event = await NewApi.getEvent(id)

    updateAuthorInput(event.author)
    updateEventNameInput(event.name)
    updateEventDescriptionInput(event.description)
    populateTaskDates(event.dates)
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