import { attendeeNameTemplate } from "./attendee-name-template.js";
import { FetchApi } from "../../controllers/API/fetchApi.js";
import { templateElement } from "../templateElement.js";

export async function buildNames(id){
    const Api = new FetchApi
    const names = await Api.getEventAttendees(id)
    const parent = document.getElementById('event-table-names');
    console.log(names);
    names.forEach(name => {
         const template = attendeeNameTemplate(name);
         console.log(template);
         const newElement = templateElement(template);
         parent.appendChild(newElement);
    });
}