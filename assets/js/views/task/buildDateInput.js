import { templateElement } from "../templateElement.js"
import { dateInputTemplate } from "./dateInputTemplate.js"
import { formatId } from "../../utils.js/formatId.js"

export const buildDateInput = (id) => {
    const datesContainer = document.getElementById('task-dates')
    const idDigitLength = 3
    const formatedId = formatId(id, idDigitLength)
    const element = templateElement(dateInputTemplate(formatedId))

    datesContainer.appendChild(element)
}