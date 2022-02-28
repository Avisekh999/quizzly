
import User from "../../../../models/userModel"
import initDB from "../../../../helpers/initDB"

initDB();

export default async function handler(req,res){
//@desc Get user by ID
//@route GET /api/users/:id
//@ccess PRIVATE/Admin
    if(req.method === "GET"){
        let {id} = req.query;
        const user = await User.findById(id);
        if(user){
            res.json(user);
        }else{
            res.status(404);
            throw new Error("User is not found")
        }
    }
//@desc Update user 
//@route PUT /api/users/:id
//@ccess PRIVATE/Admin   
    if(req.method === 'PUT'){
        let {id} = req.query;
        const user = await User.findById(id);
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
        }
        const updatedUser = await user.save();
        res.json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email
        })
    }


}