import {connect} from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectString=`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cafebuddy.ajkeijc.mongodb.net/cafe`

connect(connectString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
console.log("Connection success!!")
})
.catch(err=>{
    console.log("Error connecting",err)
})