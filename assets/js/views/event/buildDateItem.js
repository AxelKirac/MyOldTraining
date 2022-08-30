import {dateTemplate} from'./date-template.js'
import { templateElement } from '../templateElement.js';
import { buildAvailability } from './build-availability.js';


export function buildDateItem(dates){
    dates.forEach(date => {
    const parent = document.getElementById("event-table-dates");
    const template = dateTemplate(date.date);
    const newElement = templateElement(template);
    parent.appendChild(newElement);
    buildAvailability(date.attendees, date.date);
   });
}