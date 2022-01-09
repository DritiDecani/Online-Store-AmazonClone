const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    headLine:String,
    body:String,
    rating:Number,
    photo:String,
    productID:{type:Schema.Types.ObjectId,ref:"Product"},
    user:{type:Schema.Types.ObjectId,ref:"User"},

 
});

module.exports = mongoose.model("Review", CategorySchema);