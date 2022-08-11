class CustomTask {
    constructor(category, id, name, priority, description, dueDate)
    {
        this.id = id;
        this.category = category;
        this.name = name;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
    }
    get DueDate() {
        return (this.dueDate - new Date(inputActualDateFormat())) / 86400000;
    }
}