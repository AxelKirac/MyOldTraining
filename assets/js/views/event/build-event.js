
import { templateElement } from "../templateElement.js";
import { eventTemplate } from "./event-template.js";
import { eventTableTemplate } from "./event-table-template.js";

export function buildEvent(name) {
    const mainTemplate = eventTemplate(name) 
    const newElement = templateElement(mainTemplate)
    const theMain = document.querySelector('#main');
    const eventTableElement = eventTable()
    const mainEventContainer = document.getElementById('event-main-container');
    theMain.innerHTML='';
    theMain.appendChild(newElement);
    console.log(eventTableElement);
    mainEventContainer.appendChild(eventTableElement);
}

function eventTable(){
    const template = eventTableTemplate()
    const newElement = templateElement(template);

    return newElement;
}



