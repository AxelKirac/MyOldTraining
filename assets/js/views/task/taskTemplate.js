export const taskTemplate = (name) => {
    return `<input
            type="text"
            name="task-description-input"
            class="task__name-input"
            id="task-name-input"
        />

        <textarea
            name="task-description-input"
            id=""
            cols="30"
            rows="10"
            class="task__description-input"
            id="task-description-input"
        ></textarea>

        <div class="task__dates__container" id="task-dates">
            

        </div>
        <button class="task__date-add-button" id="task-date-add">New</button>

        <button class="task__validate-button" id="task-validate">OK</button>`
}