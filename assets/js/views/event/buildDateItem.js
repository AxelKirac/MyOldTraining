import {dateTemplate} from'./date-template.js'
import { templateElement } from '../templateElement.js';
import { buildAvailability } from './build-availability.js';


export function buildDateItem(dates){
    console.log(dates);
    dates.forEach(date => {
    //    const parent = document.getElementById(`event-table-availability-${date}`);
    console.log(date);
    // const parent = document.getElementById("event-table-availability-2022-01-10");
    const parent = document.getElementById("event-table-dates");
    console.log(date);
    const template = dateTemplate(date.date);
    const newElement = templateElement(template);
    parent.appendChild(newElement);
    buildAvailability(date.attendees, date.date);
   });
}