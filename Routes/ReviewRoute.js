import express from 'express';
import addReview from '../Controller/Review/AddReview.js';
import { getReview, getReviewById } from '../Controller/Review/GetReview.js';
import deleteReview from '../Controller/Review/DeleteReview.js';

const reviewRoute =express.Router();


reviewRoute.get('/',getReview)
reviewRoute.get('/:id',getReviewById)

reviewRoute.post('/',addReview)

reviewRoute.delete('/:id',deleteReview)


export default reviewRoute;