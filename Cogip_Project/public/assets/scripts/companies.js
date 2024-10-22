import { HtNetwork } from './HtNetwork.js';
const connectLink = './sendcompany';
const registerForm = document.getElementById('registering');
const possibleErrors = {
    'firstname-required': () => { },
    'firstname-min': () => { },
    'firstname-max': () => { },
    'tva-number': () => { },
    'country-valid': () => { }
};
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        name: document.getElementById('firstname').value,
        tva: document.getElementById('lastname').value,
        country: document.getElementById('mail').value
    }, (e) => {
        console.log(JSON.stringify(e));
        if (!e['valid']) {
            const errors = e['errors'];
            for (const error of errors) {
                const actualError = possibleErrors[error];
            }
        }
        else {
            window.location.href = "./newcompanies";
        }
    });
});