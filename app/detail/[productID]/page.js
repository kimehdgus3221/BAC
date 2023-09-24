import Comment from "@/component/comment";
import { connectDB } from "@/mongodata/database";
import { ObjectId } from "mongodb";

export default async function Detail(props){
  const db = (await connectDB).db('BAC');
  const result = await db.collection('product').findOne({_id:new ObjectId(props.params.productID)});
  return(
    <div>
      <h2>디테일 페이지</h2>
      <p>이름 : {result.name}</p>
      <p>가격 : {result.price} 원</p>
      <p>종류 : {result.category}</p>
      <p>작성자 : {result.writer}</p>
      <Comment _id={result._id.toString()} />
    </div>
  )
}