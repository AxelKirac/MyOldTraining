export const getTaskValues = () => {
    return {
        author: getAuthorInputValue(),
        name: getEventNameInputValue(),
        description: getEventDescriptionInputValue()
    }
}

const getAuthorInputValue = () => {
    const elementId = 'event-author-input'
    const inputElement = document.getElementById(elementId)

    return inputElement.value
}

const getEventNameInputValue = () => {
    const elementId = 'event-name-input'
    const inputElement = document.getElementById(elementId)

    return inputElement.value
}

const getEventDescriptionInputValue = () => {
    const elementId = 'event-description-input'
    const inputElement = document.getElementById(elementId)

    return inputElement.value
}

const getDatesInputValues = () => {

}