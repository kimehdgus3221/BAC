import { connectDB } from "@/mongodata/database"
import ListItem from "./ListItem";
export default async function List(){
  const db = (await connectDB).db('BAC');
  const result = await db.collection('product').find().toArray();
  return(
    
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  )
}