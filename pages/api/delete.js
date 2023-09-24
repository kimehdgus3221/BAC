import { connectDB } from "@/mongodata/database";
import { ObjectId } from "mongodb";
import {getServerSession} from 'next-auth'
import { authOptions } from "./auth/[...nextauth]";

export default async function hanlder(req,res){
  if(req.method=='DELETE'){
    let session = await getServerSession(req,res,authOptions)
    const db = (await connectDB).db('BAC')
    let 찾은거 = await db.collection('product').findOne({_id:new ObjectId(req.body)})
    if(찾은거.writer == session.user.email){
      let result = await db.collection('product').deleteOne({_id:new ObjectId(req.body)})
      return res.status(200).json('삭제완료')
    }else{
      return res.status(500).json('유저 작성자 불일치')
    }
  }
}
