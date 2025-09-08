import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://full_stack_user:fooddel24680@cluster0.1uqemax.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


