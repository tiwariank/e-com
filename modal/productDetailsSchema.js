import mongoose  from "mongoose";
var productSchema = new mongoose.Schema({
    product_id : String,
    product_name : String,
    unit : String,
    price:Number,
    currency : String,
    manufacturer : String,
    manufacturer_id : String,
    vendor : String,
    vendor_id : String,
    product_image_path : String,
})

export default mongoose.model("ProductDetails",productSchema);




