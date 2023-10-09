import { Schema,model } from "mongoose";

const ProductSchema=new Schema({
id: {
    type: Number,
    required: true,
    unique: true,
  },
name: {
    type: String,
    required: true,
  },
price: {
    type: Number,
    required: true,
  },
description:String,
catagory: {
    type: String,
    required: true,
  },
quantity: {
    type: Number,
    required: true,
    default:1
  },
isveg: {
    type: String,
    required: true,
    default:true
  },
timetoprep:Number,
rating:Number,
img: {
    type: Buffer,
    // required: true,
  },
keywords:[String],
todisplay:{
    type:Boolean,
    default:true,
}

})

const ProductModel=new  model('Products',ProductSchema);

export default ProductModel; 
// rushin pandhiyan