// THEME

// import { toggleTheme } from "./assets/scripts/toggletheme.js"
// toggleTheme();
function toggleTheme()
{
    let theme = document.getElementsByTagName('link')[1];
    let currentBtn = document.getElementById('dark__theme');
    if (theme.getAttribute('href') == './assets/css/style-light-theme.css')
    {
        theme.setAttribute('href', './assets/css/style-dark-theme.css');
        currentBtn.setAttribute('src', 'assets/img/moon.png');

    }
    else
    {
        theme.setAttribute('href', './assets/css/style-light-theme.css');
        currentBtn.setAttribute('src', 'assets/img/sun.png');
    }
}

toggleTheme();

// const theme = document.querySelector('.nav__button');
// theme.addEventListener('click', function() {
//     if
// })

// Set every checkbox to false by default

import { CheckBoxToFalse } from "./assets/scripts/checkboxtofalse.js";

CheckBoxToFalse();

// DATABASE -------------------------------------------------
// import {collection} from 'assets/scripts/collection.js'

import { collection as col } from "./assets/scripts/collection.js";

const collection = col;







// END DATABASE ------------------------------------------

// FILTER------------------------------------------------------
// Hover element
    


/**
 * Inject the HTML that will handle the list of meals people could buy based on a database.
 * @param {*} dinnerDatabase Database of different meals.
 */

import { initializeDinner } from "./assets/scripts/initializedinner.js";

initializeDinner(collection);

import { createCategoryHTML } from "./assets/scripts/createhtmlelement.js";

createCategoryHTML(collection);

import { filter } from "./assets/scripts/filter.js";

filter();



import { shopped, recreateShopElementList } from "./assets/scripts/addtomarket.js";

shopped;
recreateShopElementList();

import { CreateElementList } from "./assets/scripts/createelementlist.js";

CreateElementList();


// Shopping list

const clickOnShoppingCart =() =>{
    let shoppingCart = document.getElementsByClassName('container')
    if(shoppingCart[0].style.display == "none"){
        shoppingCart[0].style.display = "inline"
    } else {
        shoppingCart[0].style.display = "none"
    }
}
const displayShoppingCart = document.querySelector('nav').lastElementChild.firstElementChild
displayShoppingCart.addEventListener('click', clickOnShoppingCart)
clickOnShoppingCart(); // Initialize the shopping card......




