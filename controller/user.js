import User from "../models/schema.js"


export const getAllUsers = async(req,res)=>{
    try{
            const allUsers = await User.find({});
            const html=
            `<ul>
             ${allUsers.map((user)=>`<li>
                Name:${user.firstName}<br>
                Email:${user.email}</li>`)}
            </ul>`;
            res.send(html);
        }catch(error){
            console.error("Error getting the values");
        }
    
};

export const createUser =async(req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;
        const newUser =new User({firstName,lastName,email,password});
        await newUser.save();
        res.status(201).json({message:"New User created",User:newUser})
    } catch (error) {
        console.error("Error creating new user",error);
        res.status(400).json({message:"Error creating NewUser"});
        
    }
};

export const deleteUser =async(req,res)=>{
    try {
        const {id} = req.params;
        await User.findByIdAndDelete(id);
        res.json({message:`User with ${id}deleted`});
    } catch (error) {
        console.error("Error while deleting the user",error);
        res.status(500).json({message:"error while deleting user"});
    }
};