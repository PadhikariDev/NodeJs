//refactoring the code according to industry through models view controller


import express from "express";
import connectDB from "./database/db.js";
import router from "./routes/userRoutes.js";
import dotenv from "dotenv"

dotenv.config();

const app=express();
const PORT =process.env.PORT;

connectDB();
app.use(express.json()); //for parsing JSON in post method

app.use("/users",router);

app.listen(PORT,()=>{
    console.log(`Your server is started at pot :${PORT}`);
});