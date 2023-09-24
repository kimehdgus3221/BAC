import { connectDB } from "@/mongodata/database";
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res){
  let session = await getServerSession(req,res,authOptions)
  if(session){
    req.body.writer = session.user.email
  }
  if(req.method=="POST"){
    if(req.body.name.length<1){
      return res.status(500).json('제목을 작성해주세요')
    }
      const db = (await connectDB).db('BAC');
      const result = await db.collection('product').insertOne(req.body)
      return res.redirect(302,'/list')
  }
}