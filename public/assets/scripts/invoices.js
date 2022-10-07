import { HtNetwork } from './HtNetwork.js';
const connectLink = './sendinvoice';
const registerForm = document.getElementById('registering');
const possibleErrors = {
    'reference-min': () => { },
    'reference-max': () => { },
    'reference-required': () => { },
    'price-required': () => { },
    'price-numeric': () => { },
    'company-min': () => { },
    'company-max': () => { },
    'company-required': () => { }
};
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        reference: document.getElementById('firstname').value,
        price: document.getElementById('lastname').value,
        company: document.getElementById('mail').value
    }, (e) => {
        console.log(JSON.stringify(e));
        if (!e['valid']) {
            const errors = e['errors'];
            for (const error of errors) {
                const actualError = possibleErrors[error];
            }
        }
        else {
            window.location.href = "./newinvoices";
        }
    });
});