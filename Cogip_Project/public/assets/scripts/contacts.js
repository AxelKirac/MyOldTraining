import { HtNetwork } from './HtNetwork.js';
const connectLink = './sendcontact';
const registerForm = document.getElementById('registering');
const possibleErrors = {
    'firstname-required': () => { },
    'firstname-min': () => { },
    'firstname-max': () => { },
    'lastname-required': () => { },
    'lastname-min': () => { },
    'lastname-max': () => { },
    'phone-number': () => { }
};
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        name: document.getElementById('firstname').value,
        phone: document.getElementById('lastname').value,
        mail: document.getElementById('mail').value
    }, (e) => {
        console.log(JSON.stringify(e));
        if (!e['valid']) {
            const errors = e['errors'];
            for (const error of errors) {
                const actualError = possibleErrors[error];
            }
        }
        else {
            window.location.href = "./newcontacts";
        }
    });
});