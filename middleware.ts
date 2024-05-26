
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = cookies().get("session")?.value;
  console.log(session)
  if (!session || session === "") {
    return NextResponse.redirect(new URL('/login', request.url))

  }else{
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/',
// }
