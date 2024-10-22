import { buildDateInput } from "./buildDateInput.js"
import { formatId } from "../../utils/formatId.js"

export const populateTaskDates = (dates) => {
    dates.forEach((date, index) => {
        const idDigitLength = 3
        const id = formatId(index, idDigitLength)
        const dateInputId = `task-date-input-${id}`
        buildDateInput(index)
        const dateInputElement = document.getElementById(dateInputId)

        dateInputElement.value = date.date
    });
}