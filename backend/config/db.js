import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sharmaamit8091:9664472358@cluster0.kaonm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}