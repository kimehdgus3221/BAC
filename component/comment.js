'use client'

import { useEffect, useState } from "react"

export default function Comment({_id}){
  let [comment,setComment] = useState('')
  let [list,setList] = useState([])
  //client 컴포넌트 안에서 fetch쓸때는 useEffect
  useEffect(()=>{
    //query string을 통한 get에서 서버로 data 보내는 방법
    fetch('/api/comment/list?id='+_id,{method:'GET'})
    .then(res=>res.json())
    .then(data=>setList(data))
  },[])
  
  return(
    <div>
      <h3>댓글목록</h3>
      {
        list.length > 0?
        list.map((item,index)=>{
          return(
            <div key={index}>
              <p>댓글내용 : {item.content}</p>
              <p>이메일 : {item.author}</p>
              <p>작성자 : {item.name}</p>
            </div>
          )
        })
        : <p>댓글 없음</p>
      }
      <input onChange={(e)=>{setComment(e.target.value)}} />
      <button onClick={()=>{
        fetch('/api/comment/new',{method:'POST',body:JSON.stringify({
          comment,
          _id
        })})
      }}>댓글전송</button>
    </div>
  )
}