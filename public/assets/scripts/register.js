import {HtNetwork} from './HtNetwork.js';
const connectLink = 'http://localhost:8080/register';
const registerForm = document.getElementById('registering');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        mail: document.getElementById('mail').value,
        password: document.getElementById('pswd').value,
        passwordconfirm: document.getElementById('pswdconfirm').value
    }, (e) => { console.log(JSON.stringify(e));});
});