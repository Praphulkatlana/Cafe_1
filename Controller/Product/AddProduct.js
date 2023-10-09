import ProductModel from "../../Model/ProductModel.js";

const AddProduct=async(req,res)=>{
let inputData=req.body;
try {
    inputData= new ProductModel(inputData);
    const newProduct= await inputData.save()
    res.status(201).json(newProduct)
} catch (error) {
    res.status(500).json({message: error.message})
}

}
export default AddProduct;