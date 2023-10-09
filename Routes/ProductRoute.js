import express from 'express';
import AddProduct from '../Controller/Product/AddProduct.js';
import { getProduct, getProductById } from '../Controller/Product/GetProduct.js';
import updateProduct from '../Controller/Product/UpdateProduct.js';
import deleteProduct from '../Controller/Product/DeleteProduct.js';

const productRoutes=express.Router();

productRoutes.get('/', getProduct)

productRoutes.get('/:id', getProductById)

productRoutes.post('/', AddProduct)

productRoutes.put('/:id', updateProduct)

productRoutes.delete('/:id', deleteProduct)


export default productRoutes;