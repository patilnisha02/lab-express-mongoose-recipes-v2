const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {type: String,required: true},
    instructions: {type: String,required: true},
    level: {type: String,enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
    ingredients: [String],
    image: {type: String,default: "https://images.media-allrecipes.com/images/75131.jpg"},
    duration: {type: Number,min: 0},
    isArchieved: {type: Boolean,default: false},
    created: {type: Date,default: today}

})
const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;



