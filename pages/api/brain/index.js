import Brain from "../../../models/brainModel";
import initDB from "../../../helpers/initDB"

initDB();


export default async function handler(req, res) {
    
   if (req.method === "GET") {
    const brain = await Brain.find();
    if(brain){
        res.json(brain)
        console.log(brain)
    }else {
        res.status(404);
        throw new Error("User not Found");
      }
    }

    
 }

 export  const config = {
  api:{
      bodyParser: false,
  },
};