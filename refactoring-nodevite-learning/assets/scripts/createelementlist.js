CreateElementList();

import { shopped, recreateShopElementList } from "./addtomarket";

export function CreateElementList() {
    let clickableCaddy = document.querySelectorAll('.dinner__item__command__shop');
    for (const caddy of clickableCaddy) {
        caddy.addEventListener("click", function (e) {
            let cPath = e.composedPath();
            let shopBtn;
            if (cPath[0].classList[0] === 'dinner__item__command__shop') {
                shopBtn = e.composedPath()[0];
            }

            else {
                shopBtn = e.composedPath()[1];
            }
            let shopMenuName = shopBtn.name;
            let shopPrice = shopBtn.getAttribute('price');
            if (shopped[shopMenuName] !== undefined) {
                shopped[shopMenuName].quantity++;
            }

            else {
                shopped[shopMenuName] = {
                    name: shopMenuName,
                    price: shopPrice,
                    quantity: 1
                };
            }
            recreateShopElementList();
        });
    }
}