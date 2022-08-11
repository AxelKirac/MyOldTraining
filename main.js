// Initialize all DueTo with today's date
const allDueTo = document.querySelectorAll('.dueTo');
for(let dT of allDueTo)
{
    dT.value = inputActualDateFormat();
}
// Load the content of the datas
loadDatas();