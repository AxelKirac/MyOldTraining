import { displayItems } from "../views/home/displays_items.js"
import { getTaskValues } from "./task/getTaskValues.js"

export const taskValidateButtonListener = (element, NewApi, id = null) => {
    element.addEventListener("click", () => taskValidateButtonHandler(id, NewApi));
}

async function taskValidateButtonHandler(id, NewApi) {
    if (id) {
        const datas = getTaskValues()

        console.log(datas);
        await NewApi.updateEvent(id, datas)
    } else {
        // NewApi.createEvent(datas)
    }

    const main = document.querySelector('#main');
    main.innerHTML = "";
    displayItems();
} 