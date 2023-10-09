import userModel from "../../Model/UserModel.js";

export const getUser=async(req,res)=>{
    try {
        const users= await userModel.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    }

export const getUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const user= await userModel.findById({_id:id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
