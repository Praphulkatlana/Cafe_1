import moment from "moment-timezone";
import { Schema,model } from "mongoose";

moment.tz.setDefault('Asia/Kolkata');
const getISTTime=()=>{
    return moment();
}

const photoSchema=new Schema({
data:{type: Buffer,required: true},
 contentType: String , 
createdDate:{
    type:Date,
    default:getISTTime
}
})

const photoModel = new model('Images',photoSchema)

export default photoModel;