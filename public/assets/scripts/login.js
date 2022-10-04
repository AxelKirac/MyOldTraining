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

let connectLink = 'http://localhost:8080/connect';
let loggingForm = document.getElementById('logging');
loggingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('mail', document.getElementById('mail').value);
    form.append('password', document.getElementById('pswd').value);
    postJSON(connectLink, form, (e) => { console.log(JSON.stringify(e));});
});