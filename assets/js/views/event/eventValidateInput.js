
export function eventValidateInput(){
   const validateElement = document.getElementById('event-validate');
    validateElement.addEventListener("click", eventValidateHandler);
    
}

function eventValidateHandler() {
    getNameInput();
    getDisponibility();
    console.log(getDisponibility());
}

function getNameInput() {
    const inputNameElement = document.getElementById('input-name');
    const inputNameValue = inputNameElement.value 
    console.log(inputNameValue);
}

function getDisponibility(){
    const datesContainer = document.getElementById('event-table-dates');
    const datesElements = [...document.querySelectorAll('.event__table__availability')]
    console.log(datesElements);
    return datesElements.map((item)=> {
        console.log(item);
      const itemInput = item.querySelector('.event__checkbox__choice');
      console.log(itemInput);
      return itemInput.checked;

    })
}