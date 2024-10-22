const actualDate = new Date();
const main = document.querySelector('main');



function utcTime(offset = 0)
{
    let date = new Date();
    let year = date.getUTCFullYear();
    let month = date.getUTCMonth();
    let getDaysInMonth = (month) => {
        const leapYear = (year) => (0 == year % 4) && (0 != year % 100) || (0 == year % 400);
        let monthDays = [
            31,
            leapYear(year) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
        ];
        let s = 0;
        for(let i = 0; i < month; i++)
        {
            s += monthDays[i];
        }
        return s;
    };
    let utc = (year - 1970) * 31557600000 - 3600000
            + getDaysInMonth(month) * 86400000
            + (date.getUTCDate() - 1) * 86400000
            + date.getUTCHours() * 3600000
            + date.getUTCMinutes() * 60000
            + date.getUTCSeconds() * 1000;
    return new Date(utc + (offset * 3600000));
}
/**
 * 
 * @param {Date} date 
 * @returns {string}
 */




function writeFrenchTime(date)
{
    const jour = [
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
        'Dimanche'
    ];
    const mois = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'aout',
        'septembre',
        'octobre',
        'novembre',
        'décembre'
    ]
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return `${jour[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()} ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}
// Ex 1
function writeUTCTime(offset)
{
    let nDate = utcTime(offset);
    let h = nDate.getHours();
    let m = nDate.getMinutes();
    let s = nDate.getSeconds();
    return `${nDate.toLocaleDateString()} ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}
// Ex 2
function writeTime(time)
{
    time /= 1000;
    let d = Math.floor(time / 86400);
    let h = Math.floor((time / 3600) % 24);
    let m = Math.floor((time / 60) % 60);
    let s = Math.floor(time % 60);
    return `${d} jours ${h < 10 ? `0${h}` : h} heures ${m < 10 ? `0${m}` : m} minutes ${s < 10 ? `0${s}` : s} secondes`;
}
// Ex 3
function hourOffset(hours = 80000)
{
    return new Date(Date.now() + hours * 60 * 60 * 1000);
}
// List of timezone : https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
main.innerHTML = `
    <p>Exercice 1:</p>
    <p>${new Date().toLocaleString('fr-FR', { timeZone: 'America/Anchorage'})} Anchorage (USA),</p>
    <p>${new Date().toLocaleString('fr-FR', { timeZone: 'Atlantic/Reykjavik'})} Reykjavik (Iceland),</p>
    <p>${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Moscow'})} Saint-Petersburg (Russia),</p>
    <p>${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Brussels'})} Brussels (Belgium)</p>
    <p>Exercise 2:</p>
    <p>${writeTime(new Date() - new Date('1992-5-8'))} sont passées depuis ma naissance.</p>
    <p>Exercise 3:</p>
    <p>${hourOffset()}</p>
    <label for="future_date" name="future_date">Future date (in hours)</label>
    <input id="future_date" type="number" min="0" value="80000">
    <p id="future_date_txt"></p>
`;
const fDate = document.querySelector('#future_date');
document.querySelector('#future_date_txt').innerHTML = writeFrenchTime(hourOffset(fDate.value));
fDate.addEventListener('input', (e) => {
    document.querySelector('#future_date_txt').innerHTML = writeFrenchTime(hourOffset(e.target.value));
});