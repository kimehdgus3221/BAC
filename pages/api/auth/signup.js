import { connectDB } from "@/mongodata/database";
import bcrypt from 'bcrypt'

export default async function handler(req,res){
  if(req.method=="POST"){
    if(req.body.name.length<1){
      return res.status(500).json('아이디 1글자이상 빈칸X')
    }else if(req.body.password.length<1){
      return res.status(500).json('비번 1글자 이상 빈칸X')
    }else if(req.body.email.length<1){
      return res.status(500).json('이메일 1글자 이상 빈칸X')
    }
    const db = (await connectDB).db('BAC')
    let 찾은거 = await db.collection('user_cred').find({email:req.body.email})
    if(찾은거){
      return res.status(500).json('이미 있는 이메일입니다.')
    }
    let hash = await bcrypt.hash(req.body.password,10)
    req.body.password = hash;
    await db.collection('user_cred').insertOne(req.body);
    return res.status(200).json('가입성공')
  }
}