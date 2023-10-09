import ProductModel from "../../Model/ProductModel.js";

const updateProduct =async (req,res)=>{
//TODO: check previllage of update
const id=req.params.id;
const newData=req.body;
const filter={_id:id}
const dataToBeUpdated={
 $set:{
    ...newData
 }
}
try {
    const updateProduct=await ProductModel.findOneAndUpdate(filter,dataToBeUpdated)
        res.status(202).json(updateProduct)
} catch (error) {
    res.status(500).json({error: error})
}

}

export default updateProduct;