export const { shopped, recreateShopElementList } = AddToMarket();

function AddToMarket() {
    const shopped = {};
    const recreateShopElementList = () => {
        let itemContainer = document.querySelector('.shoppingcart__item');
        for (let i = itemContainer.childNodes.length - 1; i >= 0; i--) {
            itemContainer.removeChild(itemContainer.children[i]);
        }
        for (let menuName in shopped) {
            let writing = true;
            let caddy = shopped[menuName];
            let shopItem = document.createElement('div');
            shopItem.classList.add('shoppingcart__item__item');
            shopItem.setAttribute('qty', '1');

            let shopN = document.createElement('p');
            shopN.classList.add('shoppingcart__item__item__name');
            shopN.innerHTML = caddy.name;
            shopItem.appendChild(shopN);

            let shopQty = document.createElement('p');
            shopQty.classList.add('shoppingcart__item__item__quantity');
            shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
            shopItem.appendChild(shopQty);

            let shopPr = document.createElement('p');
            shopPr.classList.add('shoppingcart__item__item__price');
            shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
            shopItem.appendChild(shopPr);


            let btnContnr = document.createElement('div');
            btnContnr.classList.add('shoppingcart__item__item__btns');

            let addBtn = document.createElement('button');
            addBtn.classList.add('shoppingcart__item__item__btns__add');
            addBtn.innerHTML = "+";
            addBtn.addEventListener("click", function (e) {
                caddy.quantity++;
                shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
                shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
                computeShopPrice();
            });
            btnContnr.appendChild(addBtn);

            let removeBtn = document.createElement('button');
            removeBtn.classList.add('shoppingcart__item__item__btns__remove');
            removeBtn.innerHTML = "-";
            removeBtn.addEventListener("click", function (e) {
                caddy.quantity--;
                if (caddy.quantity <= 0) {
                    writing = false;
                    delete shopped[menuName];
                    recreateShopElementList();
                }

                else {
                    shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
                    shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
                    computeShopPrice();
                }
            });
            btnContnr.appendChild(removeBtn);

            shopItem.appendChild(btnContnr);
            if (writing) {
                itemContainer.appendChild(shopItem);
            }
        }
        computeShopPrice();
    };
    const computeShopPrice = () => {
        let total = 0;
        for (const menu in shopped) {
            total += shopped[menu].price * shopped[menu].quantity;
        }
        let shopTotalP = document.querySelector('.shoppingcart__footer__content__total');
        shopTotalP.innerHTML = `Total: ${total}€`;
    };
    return { shopped, recreateShopElementList };
}
