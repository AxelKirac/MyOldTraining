let TASK_ID = 0;
let userTasks = [];
let dark = false;
const TASK_QUERY = [
    '.toDo_tasks > .task',
    '.doing_tasks > .task',
    '.done_tasks > .task'
];
const TASK_QUERY_C = [
    '.toDo_tasks',
    '.doing_tasks',
    '.done_tasks'
];
const ALL_PRIORITY = [
    'high',
    'medium',
    'low'
];