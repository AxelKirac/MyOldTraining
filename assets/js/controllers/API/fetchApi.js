import { SETTINGS } from "../../models/settings.js"

/**
 * Class to manage API requests.
 */
export class FetchApi {

    /**
     * Make an API request with provided datas.
     * 
     * @param {String} route 
     * @param {String} method 
     * @param {Object} body 
     * @returns {Object}
     */
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

        const url = SETTINGS.apiUrl

        const rawResponse = await fetch(`${url}${route}`, datas)

        const output = await rawResponse.json()

        return output
    }

    /**
     * Get a list of all the events.
     * 
     * @returns {Object}
     */
    getEventList() {
        const route = "/api/events/"
        return this.fetchApi(route, 'GET', null)
    }

    /**
     * Get the event with the provided id.
     * 
     * @param {String} id
     * @returns {Object}
     */
    getEvent(id) {
        const route = `/api/events/${id}`
        return this.fetchApi(route, 'GET', null)
    }

    /**
     * Get a list of all the attendees, and the events they're attending.
     * 
     * @returns {Object}
     */
    getAttendees() {
        const route = `/api/attendees/`
        return this.fetchApi(route, 'GET', null)
    }

    /**
     * Get all attendances for a given name.
     * 
     * @param {String} name
     * @returns { Object}
     */
    getAttendances(name) {
        const route = `/api/attendees/${name}`
        return this.fetchApi(route, 'GET', null)
    }

    /**
     * Creates an event with dates as possibilities.
     * You must provide an author, a name and a description for the event
     * 
     * @param {Object} data - {
     *                          name: string,
     *                          dates: [
     *                            ['YYYY-MM-DD']
     *                            ['YYYY-MM-DD']
     *                            ['YYYY-MM-DD']
     *                          ],
     *                          author: string,
     *                          description: string
     *                        }
     * 
     * @returns {Object}
     */
    createEvent(data) {
        const route = `/api/events/`
        return this.fetchApi(route, 'POST', data)
    }

    /**
     * Patches(edit) an event with the provided infos.
     * 
     * @param {String} id
     * @param {Object} data - {
     *                          name: string(optional),
     *                          author: string(optional),
     *                          description: string(optional)
     *                        }
     * @returns {Object}
     */
    updateEvent(id, data) {
        const route = `/api/events/${id}`
        return this.fetchApi(route, 'PATCH', data)
    }

    /**
     * Deletes the event with provided id.
     * 
     * @param {String} id
     * @returns {Object}
     */
    deleteEvent(id) {
        const route = `/api/events/${id}`
        return this.fetchApi(route, 'DELETE', null)
    }

    /**
     * Add some possible dates to an event.
     * 
     * @param {String} id
     * @param {Object} data - {
     *                          dates: [
     *                            ['YYYY-MM-DD']
     *                            ['YYYY-MM-DD']
     *                            ['YYYY-MM-DD']
     *                          ]
     *                        }
     * @returns { Object}
     */
    addPossibleDates(id, data) {
        const route = `/api/events/${id}/add_dates`
        return this.fetchApi(route, 'POST', data)
    }

    /**
     * Add an attendance for the given event.
     * You must provide the attendee's name and some availabilities,
     * in the form of an array of object
     * 
     * @param {String} id
     * @param {Object} data - {
     *                          name: string,
     *                              dates : [
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                              ]
     *                         }
     * @returns { Object}
     */
    addAttendences(id, data) {
        const route = `/api/events/${id}/attend`
        return this.fetchApi(route, 'POST', data)
    }

    /**
     * Edit an attendance for the given event.
     * You must provide the attendee's name and some availabilities,
     * in the form of an array of object.
     * 
     * @param {String} id
     * @param {Object} data - {
     *                          name: string,
     *                              dates : [
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                                  { date: ['YYYY-MM-DD'],
     *                                    available: boolean(true / false)
     *                                  }
     *                              ]
     *                         }
     * @returns { Object}
     */
    editAttendences(id, data) {
        const route = `/api/events/${id}/attend`
        return this.fetchApi(route, 'PATCH', data)
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

