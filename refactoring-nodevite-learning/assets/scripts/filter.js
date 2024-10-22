export function filter() {
    const filterButtons = document.querySelectorAll('.button__filter > .button1');
    for (let filterBtn of filterButtons) {
        filterBtn.addEventListener("click", () => {
            const menus = document.querySelectorAll('.dinner__item');
            for (let menu of menus) {
                menu.style.display = 'block';
            }
            for (let fBtn of filterButtons) {
                let pName = fBtn.querySelector('.button__title');
                let cBox = fBtn.querySelector('.switch > .button__filter');
                if (cBox.checked) {
                    const nodeIncluded = (nodeList, includedValue) => {
                        for (let item of nodeList) {
                            if (`${item}`.toLowerCase() == `${includedValue}`.toLowerCase()) {
                                return true;
                            }
                        }
                        return false;
                    };
                    for (let menu of menus) {
                        if (!nodeIncluded(menu.classList, pName.innerHTML)) // Not included
                        {
                            menu.style.display = 'none';
                        }
                    }
                }
            }
        });
    }
}