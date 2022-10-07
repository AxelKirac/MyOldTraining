import { HtNetwork } from './HtNetwork.js';
const connectLink = './sendinvoice';
const registerForm = document.getElementById('registering');
const possibleErrors = {
    'firstname-required': () => { },
    'firstname-min': () => { },
    'firstname-max': () => { },
    'mail-max': () => { },
    'mail-valid': () => { },
    'mail-used': () => { },
    'price-number': () => { }
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