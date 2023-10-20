import { Recipe } from "./Recipe.js";
{/* Some recipes for the starting catalogue*/}
export const cookbook = [
  new Recipe(
    "Kladdkaka", "Lilly",
    {"Eggs": { amount:2, unit:"pieces"}, "Kakao" : {amount:3, unit:"tbs"}, "Butter" : {amount:100, unit:"grams"}, "Flour" : {amount: 60, unit:"grams"}, "Sugar" : {amount: 225, unit:"grams"}, "Vanilla-sugar" : {amount: 1, unit:"tsp"}}, 
    "30", 
    "Klassiskt kladdig kladdkaka", 
    ["Preheat oven to 175°C"," Melt the butter in a small pot.", " Mix the sugar and eggs into the butter. Mix well!", " Mix in the remaining ingredients."," Pour the mixture into a buttered baking dish and bake for 10-15min."], false, 6, {"Sweet/dessert": true, "Savoury": false},
    "./public/Images/kladdkaka.jpeg"
  ),
    new Recipe(
      "Carbonara",  "Ebbe",
      {"Pasta" : {amount:400, unit:"grams"}, "Eggs": { amount:2, unit:"pieces"}, "Bacon" : {amount:100, unit:"grams"}, "Cheese" : {amount:100 , unit:"grams"}}, 
      "30", 
      "Very good carbonara", 
      ["Cook Pasta", "Fry bacon", "Mix Sauce", "Assemble", "Profit"], false, 2, {"Filling": true, "Tasty": true},
      "./public/Images/carbonara.jpeg"
    ), 
    new Recipe(
      "Pruttpannkakor", "Lukas",
      {"Eggs": { amount:4, unit:"pieces"}, "Milk" : {amount:200, unit:"grams"}, Flour : {amount: 100, unit:"grams"} ,"Farts" : {amount:200 , unit:"megatons"}}, 
      "30", 
      "Very good carbonara2", 
      ["Mix", "Fry", "Fart"], false, 4, {"Smelly": true, "Tasty": false},
      "./public/Images/Pannkakor.jpeg"
    ),
    new Recipe(
      "Air cake", "Mikael",
      {"Air butter:": { amount:"0", unit:"gram"}, "Air sugar": {amount:"0", unit:"tbs"}, "Air flour": {amount:"0", unit:"ml"}, "Air eggs": { amount:"0", unit:"pieces"}, "Air salt": {amount:"0", unit:"tbs"}},
      "0",
      "Cake as easy to make as breathing",
      ["pretend you have the ingredients", "inhale", "exhale", "repeat"], false, 0, {"Gluten-free":true, "Lactose-free":true, "Vegetarian":true,"Vegan":true,"Healthy":true},
    )
]