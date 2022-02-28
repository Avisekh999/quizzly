
import User from "../../../../models/userModel"
import initDB from "../../../../helpers/initDB"

initDB();
//@desc  Register a newUser
//@route POST /api/users/
//@ccess PUBLIC
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400)
            throw new Error("User Already exists")
        } else {
            const user = await User.create({
                name,
                email,
                password,
            });
            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password

                })
            } else {
                res.satus(400);
                throw new Error("Invalid user data")
            }
        }
    }
//@desc Get all users
//@route GET /api/users
//@ccess PRIVATE/Admin
    if (req.method === 'GET') {
        const users = await User.find({});
        res.json(users);
    }
}