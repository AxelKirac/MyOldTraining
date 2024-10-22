import { HtNetwork } from './HtNetwork.js';
const connectLink = './connect';
const loggingForm = document.getElementById('logging');
const possibleErrors = {
    'mail-max': () => { },
    'mail-valid': () => { },
    'mail-error': () => { },
    'password-required': () => { },
    'password-min': () => { },
    'password-max': () => { },
    'password-error': () => { }
};
loggingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        mail: document.getElementById('mail').value,
        password: document.getElementById('pswd').value
    }, (e) => {
        console.log(JSON.stringify(e));
        if (!e['valid']) {
            const errors = e['errors'];
            for (const error of errors) {
                const actualError = possibleErrors[error];
            }
        }
        else {
            window.location.href = "./dashboard";
        }
    });
});
