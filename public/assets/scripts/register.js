import {HtNetwork} from './HtNetwork.js';
const connectLink = 'http://localhost:8080/register';
const registerForm = document.getElementById('registering');
const possibleErrors = {
    'firstname-required': () => {},
    'firstname-min': () => {},
    'firstname-max': () => {},
    'lastname-required': () => {},
    'lastname-min': () => {},
    'lastname-max': () => {},
    'mail-max': () => {},
    'mail-valid': () => {},
    'password-required': () => {},
    'password-min': () => {},
    'password-max': () => {},
    'passwordconfirm-required': () => {},
    'passwordconfirm-same': () => {}
};
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        mail: document.getElementById('mail').value,
        password: document.getElementById('pswd').value,
        passwordconfirm: document.getElementById('pswdconfirm').value
    }, (e) => {
        console.log(JSON.stringify(e));
        if(!e['valid'])
        {
            const errors = e['errors'];
            for(const error of errors) {
                const actualError = possibleErrors[error];
            }
        }
        else
        {
            window.location.href = "http://localhost:8080/login";
        }
    });
});