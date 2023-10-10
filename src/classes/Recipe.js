export class Recipe {
    constructor(name = "Recipe", author = "unknown", ingredients = "", time = "0", description = "", steps = [], unit = false) {
        this.name = name;
        this.author = author;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.steps = steps;
        this.unit = unit;
    }
}