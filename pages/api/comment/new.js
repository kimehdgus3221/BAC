import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { connectDB } from "@/mongodata/database"
import { ObjectId } from "mongodb"

export default async function handler(req,res){
    if(req.method='POST'){
      req.body = JSON.parse(req.body)
      let session = await getServerSession(req,res,authOptions)
      const db = (await connectDB).db('BAC')
      await db.collection('comment').insertOne({
        content : req.body.comment,
        author : session.user.email,
        name : session.user.name,
        parent : new ObjectId(req.body._id)
      })
    }
    return res.status(200).json('댓글작성완료')
}