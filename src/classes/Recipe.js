export class Recipe {
    constructor(name = "Recipe", ingredients = "", time = "0", description = "", steps = []) {
        this.name = name;
        this.ingredients = ingredients;
        this.time = time;
        this.description = description;
        this.steps = steps;
    }
}