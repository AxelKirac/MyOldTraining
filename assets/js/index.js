
import { FetchApi } from "./controllers/API/fetchApi.js";
import { showEvent } from "./views/event/show-event.js";
import { FetchApi } from "./controllers/API/fetchApi.js"
import { DisplayEvenlist } from "./views/home/displays_items.js";

// const method = 'POST'

// const data = { name: 'super event', dates: ['2023-10-24', '2023-10-25', '2023-10-26'], author: 'toto', description: 'test event' }

const NewApi = new FetchApi()

// console.log(NewApi.getEventList())
// console.log('test');



const id = '81baeca1afc0'

const newEvent = {
    name: 'mega event',
    dates: [
        '2022-10-05',
        '2022-10-06',
    ],
    author: 'Jean',
    description: 'un supermega event'
}

// console.log(NewApi.getEvent(id))
// console.log(NewApi.getAttendees())
// console.log(NewApi.getAttendances('Michou'))
// console.log(NewApi.createEvent(newEvent))
// console.log(NewApi.updateEvent('1456bdbb8a97', { author: 'Jacques' }))
// console.log(NewApi.deleteEvent('1456bdbb8a97'))
const newId = "6620266b4947"
showEvent(newId, NewApi);

DisplayEvenlist();


