async function postJSON(path, datas, execute = (e) => {}, error = (e) => console.error(e))
{
    try {
        const fetchResult = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(datas),
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        });
        const jsonData = await fetchResult.json();
        execute(jsonData);
    }
    catch(e)
    {
        error(e);
    }
}

let connectLink = 'http://localhost:8080/register';
let registerForm = document.getElementById('registering');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postJSON(connectLink, {
        firstname: document.getElementById('firstname'),
        lastname: document.getElementById('lastname'),
        mail: document.getElementById('mail'),
        pswd: document.getElementById('pswd'),
        pswdconfirm: document.getElementById('pswdconfirm')
    }, (e) => { console.log(e);});
});