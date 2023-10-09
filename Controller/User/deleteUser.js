import userModel from "../../Model/UserModel.js";

const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const user= await userModel.deleteOne({_id:id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export default deleteUser