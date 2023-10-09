import "./Connection.js"
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./Routes/ProductRoute.js";
import reviewRoute from "./Routes/ReviewRoute.js";
import photoRoute from "./Routes/PhotoRoutes.js";
import usersRoute from "./Routes/UserRoutes.js";


const app = express();
const PORT=3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/product',productRoutes)
app.use('/review',reviewRoute)
app.use('/photo',photoRoute)
app.use('/user',usersRoute)


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})