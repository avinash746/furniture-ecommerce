import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        trim:true
    },
    imageUrl:{
        type:String, 
        required:true
    },
    category:{
        type:String,
        enum:['flower', 'furniture'],
        required:true
    },
    subcategory:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps : true})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
