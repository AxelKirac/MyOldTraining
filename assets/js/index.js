import { FetchApi } from "./models/API/fetchApi.js"
import { displayItems } from "./views/home/displays_items.js";

const NewApi = new FetchApi()

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

const newId = "20e8e7d46fbc";

displayItems();







