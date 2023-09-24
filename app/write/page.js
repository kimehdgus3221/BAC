import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){
  let session = await getServerSession(authOptions)
  if(session){
    return(
      <div>
        <h4>글작성 Page</h4>
        <form action="/api/write" method="POST">
          <p>상품이름 : <input name="name" placeholder="상품이름"/></p>
          <p>가격 : <input name="price" placeholder="가격"/></p>
          <p>
            카테고리 : 
            <select name="category" type="checkbox">
              <option value="햄버거">햄버거</option>
              <option value="치킨">치킨</option>
              <option value="세트">세트</option>
              <option value="사이드">사이드</option>
            </select>
          </p>
          
          <button type="sumbit">작성</button>
        </form>
        <form action="/api/list" method="GET">
          <button type="submit">DB게시물 조회</button>
        </form>
      </div>
      )
  }else{
    return(
      <div>로그인하러가야겠네요...

      </div>
    )
  }
}