import {dateTemplate} from'./date-template.js'
import { templateElement } from '../templateElement.js';
export function buildDateItem(dates){
    console.log(dates);
   const parent = document.getElementById('event-table-dates');
   dates.forEach(date => {
    console.log(date);
    const template = dateTemplate(date.date);
    const newElement = templateElement(template);
    parent.appendChild(newElement);
   });
}