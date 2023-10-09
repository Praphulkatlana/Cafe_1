import { Schema,model } from "mongoose";
import moment from "moment-timezone"

moment.tz.setDefault('Asia/Kolkata');

const getISTTime=()=>{
    return moment()
}


const userSchema=new Schema({
firstName:String,
lastName:String,
createdAt:{type:Date, default:getISTTime},
email:{type:String,unique:true},
password:{type:String,minLength:5},
salt:String,
number:{type:Number,minLength:10,maxLength:10}
})

const userModel = new model('users',userSchema)

export default userModel;