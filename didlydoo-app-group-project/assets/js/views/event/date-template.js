export function dateTemplate(date){
    return `<div class="event__table__date">${date}</div>
            <div id="event-table-availability-${date}" 
            class="event__table__availability"><input type="checkbox" name="CheckEvent" id="event-task-choice" class="event__checkbox__choice"/></div>`
 }

 