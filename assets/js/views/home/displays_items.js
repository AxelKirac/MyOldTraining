import { TemplateItems } from "./item_template";
import { templateElement } from "../templateElement";
import { FetchApi } from "../../controllers/API/fetchApi";


export async function DisplayEvenlist(){
    const NewApi = new FetchApi()
    const EventName = NewApi.getEventList();
    console.log(EventName)
    EventName.forEach((item) => {
        const template = TemplateItems(item.name);
        const element = templateElement(template);
        const main = document.querySelector('#event--list');
        main.appendChild(element);
    });
}
// EventName.forEach((items) => TemplateItems(items.name));