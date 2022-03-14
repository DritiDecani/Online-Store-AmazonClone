const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name : String,
    email : String,
    number : Number,
    message : String,
    created_at:{type:Date},
      updated_at:{type:Date}
});
ContactSchema.pre('save',function(next){
  now = new Date();
  this.updated_at = now;
  if(!this.created_at){
    this.created_at = now;
  }
  next();
});

module.exports = mongoose.model("Contact", ContactSchema);