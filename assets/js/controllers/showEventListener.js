import { showEvent } from "../views/event/show-event.js";

function getJoinButtonId(id) {
    return `#event__list__items__options__join__${id}`
}

export function addJoinButtonListener(id, NewApi) {
    const buttonid = getJoinButtonId(id);
    const buttonJoin = document.querySelector(getJoinButtonId(id));
    console.log(buttonJoin)
    buttonJoin.addEventListener('click', () => showEvent(id, NewApi))
    // console.log(buttonid)
    // deleteButtonListeners(id, buttonDelete, NewApi);
}