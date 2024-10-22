export const collection = AllCards();
function AllCards() {
    return [
        {
            name: "Pizza Ananas",
            picture: "assets/img/pananas.jpg",
            ingredients: ["farine", "levure de boulanger", "sel", "huile d'olive", "crème de sésame noir", "tomates fraîches", "oignon rouge", "poivron rouge, mozzarella", "chiffonnade de jambon ou blanc de poulet", "coriandre", "ananas"],
            price: 2,
            categories: ["pizza", "fruit"],
        },
        {
            name: "Pizza Chorizo",
            picture: "assets/img/pchorizo.jpg",
            ingredients: ["pâte", "sauce tomate", "fromages râpés", "chorizo", "poivron", "ognion", "olives noires", "huile d'olive"],
            price: 5,
            categories: ["pizza"],
        },
        {
            name: "Brochette Boeuf",
            picture: "assets/img/broboeuf.jpeg",
            ingredients: ["Poivre", "Sel", "Boeuf", "Sauce"],
            price: 4,
            categories: ["brochette"],
        },
        {
            name: "Brochette Vegan",
            picture: "assets/img/brovegan.jpg",
            ingredients: ["sel", "poivre", "Mangue", "Avocat"],
            price: 7,
            categories: ["brochette", "végétarien", "vegan", "fruit"],
        },
        {
            name: "Brochette Agneau",
            picture: "assets/img/broagneau.jpg",
            ingredients: ["sel", "poivre", "Sauce", "Agneau"],
            price: 7,
            categories: ["brochette"]
        },
        {
            name: "Brochette Canard",
            picture: "assets/img/brocanard.jpeg",
            ingredients: ["Sel", "Poivre", "Assaisonnement", "Canard"],
            price: 9,
            categories: ["brochette"]
        },
        {
            name: "Brochette Poulet",
            picture: "assets/img/bropoulet.jpg",
            ingredients: ["Poulet", "Sauce", "Tomates", "Sel"],
            price: 9,
            categories: ["brochette"],
        },
        {
            name: "Pizza Legume",
            picture: "assets/img/pizzalegume.jpg",
            ingredients: ["Pâte", "Poivrons", "Tomates", "Maïs", "Oignons Rouges"],
            price: 5,
            categories: ["pizza", "vegan", "végétarien"],
        },
        {
            name: "Pizza Saumon",
            picture: "assets/img/pizzasaumon.jpg",
            ingredients: ["Saumon", "sel", "poivre", "Garniture"],
            price: 4,
            categories: ["pizza", "végétarien"]
        },
        {
            name: "Pizza Vegan",
            picture: "assets/img/pizzavegan.jpg",
            ingredients: ["Tomates", "Salades", "Olives", "Poivrons", "Piment"],
            price: 6,
            categories: ["pizza", "vegan", "végétarien"]
        },
    ];
}
