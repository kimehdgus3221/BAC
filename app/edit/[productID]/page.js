import { connectDB } from "@/mongodata/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
  const db = (await connectDB).db('BAC');
  const result = await db.collection('product').findOne({_id:new ObjectId(props.params.productID)});
  return(
    <div>
      <h4>글수정 Page</h4>
      <form action="/api/edit" method="POST">
        <input name="name" defaultValue={result.name}></input><br/>
        <input name="price" defaultValue={result.price}></input><br/>
        <input name="category" defaultValue={result.category}></input><br/>
        <input name="description" defaultValue={result.description}></input><br/>
        <input name="_id" defaultValue={result._id} style={{display:"none"}}></input>
        <button type="sumbit">작성</button>
      </form>
    </div>
  )
}