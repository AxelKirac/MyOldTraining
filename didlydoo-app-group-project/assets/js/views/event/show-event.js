import { buildEvent } from "./build-event.js";

export async function showEvent(id, NewApi){
    const event = await NewApi.getEvent(id);
    buildEvent(event, id);
}

