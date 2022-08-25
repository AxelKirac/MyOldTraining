import { FetchApi } from "./controllers/API/fetchApi.js"

// const method = 'POST'

// const data = { name: 'super event', dates: ['2023-10-24', '2023-10-25', '2023-10-26'], author: 'toto', description: 'test event' }

const NewApi = new FetchApi()

console.log(NewApi.getEventList())
console.log('test');


