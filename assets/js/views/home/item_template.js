export function TemplateItems(name) {
    
    return ` <li class="event__list__items">
    
    <p>${name}</p>
    
    <div class="event__list__items__options">
        
        <button id="event__list__items__options__delete__id" class="event__list__items__options__delete">
            <img src="assets/img/delete_black.png" alt="delete" class="event__list__items__options__delete__img">
        </button>
        
        <button id="event__list__items__options__delete__id" class="event__list__items__options__edit">
            <img src="assets/img/edit_black.png" alt="edit" class="event__list__items__options__edit__img">
        </button>
        
        <button id="event__list__items__options__delete__id" class="event__list__items__options__join">
            <img src="assets/img/join_black.png" alt="join" class="event__list__items__options__join__img">
        
        </button>
    
    </div>

</li>
</ul>`

}
