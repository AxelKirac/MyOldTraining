
import { templateElement } from "../templateElement.js";
import { eventTemplate } from "./event-template.js";
import { eventTableTemplate } from "./event-table-template.js";

export function buildEvent(name) {
    const mainTemplate = eventTemplate(name) 
    const newElement = templateElement(mainTemplate)
    console.log(newElement);
    const theMain = document.querySelector('#main');
    theMain.innerHTML='';
    theMain.appendChild(newElement);
    console.log(theMain);
    eventTable();
}

function eventTable(){
    const template = eventTableTemplate()
    const newElement = templateElement(template);
    const mainEventContainer = document.querySelector('#event-main-container');
    console.log(mainEventContainer);
    mainEventContainer.appendChild(newElement);
    
}



