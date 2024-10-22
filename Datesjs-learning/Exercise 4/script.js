const jour = [
    'Dim',  
    'Lun',
    'Mar',
    'Mer',
    'Jeu',
    'Ven',
    'Sam',
];
const mois = [
    'JAN',
    'FEV',
    'MAR',
    'AVR',
    'MAI',
    'JUN',
    'JUI',
    'AOU',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
]



function displaydate() {
    let date = new Date();
    console.log('werws')
    
    let Day = jour[new Date().getDay()]
    let num = date.getDate();

    let hour = date.getHours()
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let month = mois[new Date().getMonth()];
    let year = date.getFullYear();

    const hours = document.querySelector('div.hours');
    const Days = document.querySelector('div.day');
    const dates = document.querySelector('div.date');
    const years = document.querySelector('div.years');
    Days.innerHTML = `<p>${Day.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}</p>`
    hours.innerHTML = `<p>${hour.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}:${minute.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}:${second.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}</p> `;
    dates.innerHTML = `<p>${num.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}</p>
    <p>${month.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}</p>`;
    years.innerHTML = `<p>${year.toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})}</p>` 

}

setInterval(displaydate, 1000);






