import productModel from "../../Model/ProductModel.js";

const deleteProduct=async(req, res) => {

try {
    const deletedProduct = await productModel.deleteOne({_id: req.params.id})
    res.status(202).send(deletedProduct)
} catch (error) {
    res.status(404).send(error);
}

}

export default deleteProduct;