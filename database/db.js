import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //loads .env variables

const connectDB = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Database has been connected ${conn.connection.host}`);
    } catch(error){
        console.error("Database connection Error",error);
    }
}

export default connectDB;

