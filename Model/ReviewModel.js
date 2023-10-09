import { Schema,model } from "mongoose";
import moment from "moment-timezone"

moment.tz.setDefault('Asia/Kolkata');

const getISTTime=()=>{
    return moment()
}

const reviewSchema = new Schema({
name:{
    type:String,
    minLength:3,
    required:true,
},
description:String,
date:{
    type:Date,
    default:getISTTime
},
})

const reviewModel=new model('Reviews',reviewSchema)

export default reviewModel;