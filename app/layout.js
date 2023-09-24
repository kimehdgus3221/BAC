import Nav from '@/component/nav'
import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: '게시판 만들기',
  description: 'next with CoddingApple',
}

export default async function RootLayout({ children }) {
  let session =  await getServerSession(authOptions)
  return (
    <html lang="ko">
      <body>
        <Nav session={session}></Nav>
        {children}
      </body>
    </html>
  )
}
