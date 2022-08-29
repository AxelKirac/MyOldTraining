import { templateElement } from "../templateElement.js"
import { taskTemplate } from "./taskTemplate.js"

export const buildTask = () => {
    const mainContainer = document.getElementById('main')
    const element = templateElement(taskTemplate())

    mainContainer.innerHTML = ''
    mainContainer.appendChild(element)
}