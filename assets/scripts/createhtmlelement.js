export function createCategoryHTML(collection)
{
    const generateCategories = () => {
        let x = [];
        for(let element of collection)
        {
            for(let item of element.categories)
            {
                x.push(item);
            }
        }
        const uniqueElement = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        return x.filter(uniqueElement);
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let cats = generateCategories();
    const btnFilt = document.querySelector('.button__filter');
    for(let cat of cats)
    {
        const button1 = document.createElement('div');
        button1.classList.add('button1');
        button1.innerHTML = `
        <p class="button__title">${capitalizeFirstLetter(cat)}</p>
        <label class="switch">
            <input type="checkbox" class="button__filter">
            <span class="slider round"></span>
        </label>
        `;
        btnFilt.appendChild(button1);
    }
}