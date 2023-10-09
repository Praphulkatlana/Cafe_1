import reviewModel from "../../Model/ReviewModel.js";

export  const getReview=async(req,res)=>{
    try {
    const Reviews= await reviewModel.find({})
    res.status(200).json(Reviews)
} catch (error) {
    res.status(500).json({message: error.message})
}

}

export const getReviewById=async(req,res)=>{
    try {
        const ReviewId=req.params.id
        const Review=await reviewModel.findById({_id:ReviewId})
        res.status(200).json(Review)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
