'use client'
import Link from "next/link";
export default function ListItem({result}){
  return(
    <div>
      {
        result.map((item,index)=>
            <div className="list-item" key={index}>
              <Link href={'/detail/'+item._id}>
              <h4>{item.name}</h4>
              <p>{item.price}원</p>
              <p>{item.category}</p>
              <p>{item.writer}</p>
              </Link>
              <button><Link href={'/edit/'+item._id}>수정</Link></button>
              <span onClick={({result})=>{
                  fetch('/api/delete', {
                    method: 'DELETE',
                    body: item._id
                  });
              }}>삭제용</span>
            </div>
        )
      }
    </div>
  )
}