import { templateElement } from "../templateElement.js";
import { eventTemplate } from "./event-template.js";
import { eventTableTemplate } from "./event-table-template.js";
import { buildDateItem } from "./buildDateItem.js";
import { buildNames } from "./build-names.js";

export function buildEvent(event, id) {
    const theMain = document.querySelector('#main');
    theMain.innerHTML='';
    mainContainer(event.name);
    eventTable();
    buildDateItem(event.dates);
    buildNames(id)
}

function eventTable(){
    const template = eventTableTemplate();
    const newElement = templateElement(template);
    const mainEventContainer = document.querySelector('#event-main-container');
    mainEventContainer.appendChild(newElement);
    
}

function mainContainer(name){
    const mainTemplate = eventTemplate(name) 
    const newElement = templateElement(mainTemplate)
    const theMain = document.querySelector('#main');
    theMain.appendChild(newElement);
}



