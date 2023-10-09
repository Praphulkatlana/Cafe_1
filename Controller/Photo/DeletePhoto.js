import photoModel from "../../Model/PhotoModel.js";

const deletePhoto=async(req,res)=>{
try {
    const id=req.params.id;
    const data=await photoModel.deleteOne({_id:id})
    res.status(200).json(data)
} catch (error) {
    res.status(500).json({message: error.message})
}
}

export default deletePhoto