export class Recipe {
    constructor(
        name = "Recipe", 
        author = "unknown", 
        ingredients = {}, 
        time = "0", 
        description = "", 
        steps = [], 
        unit = false,
        portions = 2
    ) {
        this.name = name;
        this.author = author;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.steps = steps;
        this.unit = unit;
        this.portions = portions;
    }

    getIngredients(multiplier = 1) {
        let ingredients = {};
        for (let ing in this.ingredients) {
            ingredients[ing] = {
                amount: (this.ingredients[ing].amount / this.portions) * multiplier,
                unit: this.ingredients[ing].unit
            }
        }
        return ingredients;
    }
}