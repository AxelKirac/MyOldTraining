import { TemplateItems } from "./item_template.js";
import { templateElement } from "../templateElement.js";
import { FetchApi } from "../../controllers/API/fetchApi.js";
import { deleteButtonListeners } from "../../controllers/deleteButtonListeners.js";
import { displayListTemplate } from "./displayList_template.js";
import { addJoinButtonListener } from "../../controllers/showEventListener.js";
import { showTask } from "../task/showTask.js";

export async function displayItems() {
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
        addEditButtonListener(NewApi, item.id)
    });
}

function getDeleteButtonId(id) {
    return `#event__list__items__options__delete__${id}`
}

function addDeleteButtonListener(id, NewApi) {
    const buttonid = getDeleteButtonId(id);
    const buttonDelete = document.querySelector(getDeleteButtonId(id));
    deleteButtonListeners(id, buttonDelete, NewApi);
}


function getEditButtonId(id) {
    return `#event__list__items__options__edit__${id}`
}

export function addEditButtonListener(NewApi, id) {
    const idbutton = getEditButtonId(id);
    console.log(idbutton)
    const editButton = document.querySelector(idbutton)
    console.log(editButton)
    editButton.addEventListener('click', () => showTask(NewApi, id))
}