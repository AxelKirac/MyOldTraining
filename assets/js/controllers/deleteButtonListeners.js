import { DisplayEvenlist } from "../views/home/displays_items.js";

export function deleteButtonListeners(id, element, NewApi) {
     console.log(element)
     element.addEventListener("click",() => deleteButtonHandler(id, NewApi));
}

async function deleteButtonHandler(id, NewApi) {
    await NewApi.deleteEvent(id);
    const main = document.querySelector('#main');
    main.innerHTML = "";
    DisplayEvenlist();
} 