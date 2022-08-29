import { availabilityTemplate } from "./availability-template.js";
import { templateElement } from "../templateElement.js";

export function buildAvailability(attendees){
    attendees.forEach(attendee =>{ 
        console.log(attendee);
        const parent = document.getElementById('event-table-dates');
        console.log(attendee.available);
        const template = availabilityTemplate(formatAvailable(attendee.available));
        const newElement = templateElement(template);
        parent.appendChild(newElement);
    })
}

function formatAvailable(available){
    switch (available) {
        case true:
            return "V"
            break;
        case false: 
        return "X"
        default:
            return "?"
            break;
    }
}

