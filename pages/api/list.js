import { connectDB } from "@/mongodata/database";

export default async function handler(req,res){
  const db = (await connectDB).db('BAC');
  const result = await db.collection('product').find().toArray();
  if(req.method==="GET"){
    res.status(200).json(result)
  }
}