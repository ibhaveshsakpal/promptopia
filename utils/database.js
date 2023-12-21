import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async()=> {
    mongoose.set("strictQuery");

    if(isConnected){
        console.log("MongoDB is already running!");
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("Mongodb connected!")

    }catch(error){
        console.log(error)
    }
}