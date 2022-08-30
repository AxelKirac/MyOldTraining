import { displayItems } from "../views/home/displays_items.js"
import { getTaskValues } from "./task/getTaskValues.js"

export const taskValidateButtonListener = (element, NewApi, id = null) => {
    element.addEventListener("click", () => taskValidateButtonHandler(id, NewApi));
}

async function taskValidateButtonHandler(id, NewApi) {
    const datas = getTaskValues()

    if (id) {
        // Update an event
        await NewApi.updateEvent(id, {
            author: datas.author,
            name: datas.name,
            description: datas.description
        })
        await NewApi.addPossibleDates(id, {
            dates: datas.dates
        })
    } else {
        // Create an event
        await NewApi.createEvent(datas)
    }


    console.log(NewApi.getEvent(id))

    const main = document.querySelector('#main');
    main.innerHTML = "";
    displayItems();
} 