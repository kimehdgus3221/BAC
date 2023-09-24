import { connectDB } from "@/mongodata/database";
import { ObjectId } from "mongodb";

export default async function hanlder(req,res){
  const db = (await connectDB).db('BAC');
  const result = await db.collection('product').updateOne({_id:new ObjectId(req.body._id)},{$set:{
    name:req.body.name,
    price:req.body.price,
    category:req.body.category,
    description:req.body.description,
  }})
  return res.redirect(302,'/list')
}