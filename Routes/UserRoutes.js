import express from "express"
import {getUser, getUserById} from "../Controller/User/getUser.js"
import postUser from "../Controller/User/postUser.js"
import deleteUser from "../Controller/User/deleteUser.js"
import updateUser from "../Controller/User/UpdateUser.js"
import loginCheck from "../Controller/User/Login.js"
import { tokenAuth } from "../Controller/User/auth.js"

const usersRoute=express.Router()

usersRoute.post('/',tokenAuth,postUser)

usersRoute.delete('/:id',tokenAuth,deleteUser)

usersRoute.put('/:id',tokenAuth,updateUser)

usersRoute.get('/login',loginCheck)
usersRoute.get('/:id',getUserById)

usersRoute.get('/',tokenAuth,getUser)


export default usersRoute;