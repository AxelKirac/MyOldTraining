import { buildEvent } from "./build-event.js";

export async function showEvent(id, NewApi){
    const testEvent = await NewApi.getEvent(id);
    console.log(testEvent.name);
    buildEvent(testEvent.name);
}

