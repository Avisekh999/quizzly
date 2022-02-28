import Brain from "../../../models/brainModel";

export default async function handler(req, res) {
    const {id} = req.query;
    const brain = await Brain.findById(id);
    if(brain){
        res.json(brain)
        console.log(brain)
    }else {
        res.status(404);
        throw new Error("User not Found");
      }
     
}