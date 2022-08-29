export const taskTemplate = () => {
    return `<input
            type="text"
            name="event-author-input"
            class="event__author-input"
            id="event-author-input"
            placeholder="Author"
        />
        <input
            type="text"
            name="event-name-input"
            class="event__name-input"
            id="event-name-input"
            placeholder="Event name"
        />

        <textarea
            name="event-description-input"
            cols="30"
            rows="10"
            class="event__description-input"
            id="event-description-input"
            placeholder="Event description"
        ></textarea>

        <div class="event__dates__container" id="event-dates">
            

        </div>
        <button class="event__date-add-button" id="event-date-add">New date</button>

        <button class="event__validate-button" id="event-validate">OK</button>`
}