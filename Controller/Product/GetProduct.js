import ProductModel from "../../Model/ProductModel.js";

export  const getProduct=async(req,res)=>{
    try {
    const products= await ProductModel.find({})
    res.status(200).json(products)
} catch (error) {
    res.status(500).json({message: error.message})
}

}

export const getProductById=async(req,res)=>{
    try {
        const productId=req.params.id
        const product=await ProductModel.findById({_id:productId})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
