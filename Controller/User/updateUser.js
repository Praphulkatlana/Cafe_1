import userModel from "../../Model/UserModel.js";

const updateUser=async(req,res)=>{
    const id = req.params.id
const newData=req.body;
const filter={_id:id}
const dataToBeUpdated = {
    $set: {...newData}
}
    try {
        const user= await userModel.findOneAndUpdate(filter,dataToBeUpdated)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export default updateUser