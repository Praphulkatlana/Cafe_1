import photoModel from "../../Model/PhotoModel.js";

export const getPhoto=async(req,res)=>{
try {
    const photos=await photoModel.find({})
    res.status(200).json(photos)
} catch (error) {
    res.status(500).json({message: error.message})
}
}

export const getPhotoById=async(req,res)=>{
    try {
        const id=req.params.id;
        const photos=await photoModel.findById({_id:id})
        res.status(200).json(photos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
