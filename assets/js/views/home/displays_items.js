import { TemplateItems } from "./item_template.js";
import { templateElement } from "../templateElement.js";
import { FetchApi } from "../../controllers/API/fetchApi.js";


export async function DisplayEvenlist(){
    const NewApi = new FetchApi()
    const EventName = await NewApi.getEventList();
    EventName.forEach(item => {
        const template = TemplateItems(item.name, item.id);
        const element = templateElement(template);
        const main = document.querySelector('#event--list');
        main.appendChild(element);
    });
}