import { connectDB } from "@/mongodata/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
  if(req.method='GET'){
    const db = (await connectDB).db('BAC');
    const result = await db.collection('comment').find({
      parent : new ObjectId(req.query.id)
    }).toArray()
    return res.status(200).json(result)
  }
}