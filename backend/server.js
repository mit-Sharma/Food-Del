import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from 'dotenv';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config();

//app config
const app=express();
const port=4000;

app.use(express.json());
app.use(cors())
//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.get("/",(req,res)=>{
   res.send('API WORKING')
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})
//mongodb+srv://sharmaamit8091:9664472358@cluster0.kaonm.mongodb.net/?