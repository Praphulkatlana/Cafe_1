import reviewModel from "../../Model/ReviewModel.js";

const deleteReview=async(req, res) => {

try {
    const deletedReview = await reviewModel.deleteOne({_id: req.params.id})
    res.status(202).send(deletedReview)
} catch (error) {
    res.status(404).send(error);
}

}

export default deleteReview