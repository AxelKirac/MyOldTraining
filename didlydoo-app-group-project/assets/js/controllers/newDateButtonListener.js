import { buildDateInput } from "../views/task/buildDateInput.js"

export const newDateButtonListener = (element) => {
    element.addEventListener("click", newDateButtonHandler);
}

const newDateButtonHandler = () => {
    const datesContainer = document.getElementById('event-dates')
    const datesCount = datesContainer.childElementCount

    buildDateInput(datesCount + 1)
}