import {HtNetwork} from './HtNetwork.js';
const connectLink = 'http://localhost:8080/connect';
const loggingForm = document.getElementById('logging');
loggingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    HtNetwork.post(connectLink, {
        mail: document.getElementById('mail').value,
        password: document.getElementById('pswd').value
    }, (e) => { console.log(JSON.stringify(e));});
});
