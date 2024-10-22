import { availabilityTemplate } from "./availability-template.js";
import { templateElement } from "../templateElement.js";

export function buildAvailability(attendees, date){
    attendees.forEach(attendee =>{ 
        console.log(attendee);
        const parent = document.getElementById(`event-table-availability-${date}`);
        console.log(date);
        console.log(attendee.available);
        const template = availabilityTemplate(formatAvailable(attendee.available));
        const newElement = templateElement(template);
        console.log(parent);
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

