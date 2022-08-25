
// export const fetchApi = async (method, body) => {
//     const rawResponse = await fetch('http://localhost:3000/api/events/', {
//         method: method,
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     })

//     const output = await rawResponse.json()

//     return output

// }


export class FetchApi {

    async fetchApi(route, method, body) {
        const datas = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        if (body) {
            datas.body = JSON.stringify(body)
        }


        const rawResponse = await fetch(`http://localhost:3000${route}`, datas)

        const output = await rawResponse.json()

        return output

    }

    getEventList() {
        const route = "/api/events/"
        return this.fetchApi(route, 'GET', null)
    }

    getEvent(id) {
        const route = `/api/events/${id}`
        this.fetchApi(route, 'GET', null)
    }

    getAttendees() {
        const route = `/api/attendees/`
        this.fetchApi(route, 'GET', null)
    }

    getAttendances(name) {
        const route = `/api/attendees/${name}`
        this.fetchApi(route, 'GET', null)
    }

    createEvent(data) {
        const route = `/api/events/`
        this.fetchApi(route, 'POST', data)
    }

    updateEvent(id, data) {
        const route = `/api/events/${id}`
        this.fetchApi(route, 'PATCH', data)
    }

    deleteEvent(id) {
        const route = `/api/events/${id}`
        this.fetchApi(route, 'DELETE', null)
    }

    addPossibleDates(id, data) {
        const route = `/api/events/${id}/add_dates`
        this.fetchApi(route, 'POST', data)
    }

    addAttendences(id, data) {
        const route = `/api/events/${id}/attend`
        this.fetchApi(route, 'POST', data)
    }

    editAttendences(id, data) {
        const route = `/api/events/${id}/attend`
        this.fetchApi(route, 'PATCH', data)
    }

    // GET / api / events / A list of all the events : getEventList
    // GET / api / events / [id] 		A single event : getEvent
    // GET / api / attendees / Get a list of all the attendees, and the events they're attending : getAttendees
    // GET / api / attendees / [name] 		Get all attendances for a given name : getAttendances
    // POST / api / events / { name: string, dates: array of dates ['YYYY-MM-DD'], author: string, description: string } 	Creates an event with dates as possibilities.You must provide an author, a name and a description for the event : createEvent
    // PATCH / api / events / [id] / { name: string(optional), author: string(optional), description: string(optional) } 	Patches(edit) an event with the provided infos : updateEvent
    // DELETE / api / events / [id] / Deletes an event : deleteEvent
    // POST / api / events / [id] / add_dates 	{ dates: array of dates['YYYY-MM-DD'] } 	Add some possible dates to an event : addPossible Dates
    // POST / api / events / [id] / attend 	{ name: string, dates : [{ date: date 'YYYY-MM-DD', available: boolean(true / false) }] } 	Add an attendance for the given event.You must provide the attendee's name and some availabilities, in the form of an array of object : addAttendences
    // PATCH / api / events / [id] / attend 	{ name: string, dates : [{ date: date 'YYYY-MM-DD', available: boolean(true / false) }] } 	Edit an attendance for the given event.You must provide the attendee's name and some availabilities, in the form of an array of object : editAttendences
}

