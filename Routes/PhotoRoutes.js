import express from "express"
import multer from "multer";
import { getPhoto, getPhotoById } from "../Controller/Photo/GetPhoto.js";
import deletePhoto from "../Controller/Photo/DeletePhoto.js";
import postPhoto from "../Controller/Photo/PostPhoto.js";

const storage=multer.memoryStorage();
const upload=multer({storage})

const photoRoute=express.Router();

photoRoute.get('/',getPhoto)

photoRoute.get('/:id',getPhotoById)

photoRoute.post('/',upload.single('image'),postPhoto)

photoRoute.delete('/:',deletePhoto)

export default photoRoute

