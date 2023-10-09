import reviewModel from "../../Model/ReviewModel.js";

const addReview=async(req,res)=>{
const reviewBody=req.body;

try {
    let review=new reviewModel(reviewBody)
    review=await review.save();
    res.status(201).send({review});
} catch (error) {
    res.status(500).send({message: error.message});
}

}

export default addReview;