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
const LANGUAGE_DB = {
    'en': {
        'NEW_TASK_INPUT': {
            name: 'Name:',
            priority: 'Priority:',
            pLow: 'Low',
            pMed: 'Medium',
            pHigh: 'High',
            description: 'Description:',
            dueTo: 'Due to:',
            post: 'Post task'
        },
        'SORT_INPUT': {
            category: 'Sort',
            prop0: 'Name',
            prop1: 'Priority',
            prop2: 'Timeline'
        },
        'FILTER_INPUT': {
            category: 'Filter',
            prop0: 'To do',
            prop1: 'Doing',
            prop2: 'Done',
            nTask: 'New task'
        },
        'THEME_INPUT': {
            category: 'Dark mode',
            opposite: 'Light mode'
        },
        'LANGUAGE_INPUT': {
            name: 'Language :',
            list: [
                {key: 'English', value: 'en', default: true},
                {key: 'French', value: 'fr'}
            ]
        },
        'DATE_WRITE': (days) => {
            if(days > 1)
            {
                return `In ${days} days.`;
            }
            else if(days == 1)
            {
                return `Tomorrow.`;
            }
            else if(days == 0)
            {
                return `Today.`;
            }
            else if(days == -1)
            {
                return `Yesterday.`;
            }
            return `${Math.abs(days)} days late.`;
        }
    },
    'fr': {
        'NEW_TASK_INPUT': {
            name: 'Nom :',
            priority: 'Priorité :',
            pLow: 'Basse',
            pMed: 'Moyenne',
            pHigh: 'Haute',
            description: 'Description :',
            dueTo: 'À remettre au:',
            post: 'Poster la tâche'
        },
        'SORT_INPUT': {
            category: 'Trier',
            prop0: 'Nom',
            prop1: 'Priorité',
            prop2: 'Remise'
        },
        'FILTER_INPUT': {
            category: 'Filtre',
            prop0: 'À faire',
            prop1: 'En cours',
            prop2: 'Terminé',
            nTask: 'Nouvelle tâche'
        },
        'THEME_INPUT': {
            category: 'Mode sombre',
            opposite: 'Mode claire'
        },
        'LANGUAGE_INPUT': {
            name: 'Langue :',
            list: [
                {key: 'Anglais', value: 'en'},
                {key: 'Français', value: 'fr', default: true}
            ]
        },
        'DATE_WRITE': (days) => {
            if(days > 1)
            {
                return `Dans ${days} jours.`;
            }
            else if(days == 1)
            {
                return `Demain.`;
            }
            else if(days == 0)
            {
                return `Aujourd'hui.`;
            }
            else if(days == -1)
            {
                return `Hier.`;
            }
            return `${Math.abs(days)} jours de retard.`;
        }
    }
};