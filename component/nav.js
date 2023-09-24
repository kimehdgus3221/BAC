'use client'
import Link from "next/link";
import {signIn,signOut} from 'next-auth/react'
export default function Nav({session}){
  return(
        <nav>
          <ul>            
            <li><Link href={"/"}>Home</Link> </li>
            <li><Link href={"/list"}>글목록</Link> </li>
            <li><Link href={"/write"}>글작성</Link> </li>
            <li><Link href={"/register"}>회원가입</Link> </li>
            {
              session?
              <button onClick={()=>{signOut()}}>LogOut</button>
              :
              <button onClick={()=>{signIn()}}>Login</button>
            }
            
          </ul>
        </nav>
  )
}