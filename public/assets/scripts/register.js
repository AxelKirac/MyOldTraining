async function postJSON(path, datas, execute = (e) => {}, error = (e) => console.error(e))
{
    try {
        const fetchResult = await fetch(path, {
            method: 'POST',
            body: datas
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
    const form = new FormData();
    form.append('firstname', document.getElementById('firstname').value);
    form.append('lastname', document.getElementById('lastname').value);
    form.append('mail', document.getElementById('mail').value);
    form.append('password', document.getElementById('pswd').value);
    form.append('passwordconfirm', document.getElementById('pswdconfirm').value);
    postJSON(connectLink, form, (e) => { console.log(JSON.stringify(e));});
});