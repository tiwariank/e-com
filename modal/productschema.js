// const mongoose = require("mongoose");
import mongoose  from "mongoose";
var productSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:Number
})

export default mongoose.model("Product",productSchema);
