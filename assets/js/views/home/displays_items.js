import { TemplateItems } from "./item_template.js";
import { templateElement } from "../templateElement.js";
import { FetchApi } from "../../controllers/API/fetchApi.js";
import { deleteButtonListeners } from "../../controllers/deleteButtonListeners.js";
import { displayListTemplate } from "./displayList_template.js";
import { addJoinButtonListener } from "../../controllers/showEventListener.js";

export async function displayItems(){
    const NewApi = new FetchApi()
    const EventName = await NewApi.getEventList();
    const ulList = document.querySelector('#main');
    const ulTemplate = displayListTemplate();
        const ulElement = templateElement(ulTemplate);
        ulList.appendChild(ulElement);
        console.log(EventName)
    EventName.forEach(item => {
        const template = TemplateItems(item.name, item.id);
        const element = templateElement(template);
        const main = document.querySelector('#event--list');
        main.appendChild(element);
        addDeleteButtonListener(item.id, NewApi)
        addJoinButtonListener(item.id, NewApi);
    });
}

function getDeleteButtonId(id) {
    return `#event__list__items__options__delete__${id}`
}

function addDeleteButtonListener(id, NewApi) {
    const buttonid = getDeleteButtonId(id);
    const buttonDelete = document.querySelector(getDeleteButtonId(id));
    // console.log(buttonid)
    deleteButtonListeners(id, buttonDelete, NewApi);
}