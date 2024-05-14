import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
type Role = keyof typeof roleBasePrivateRoutes;
const AuthRoutes = ['/login','/register']
 const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
 const roleBasePrivateRoutes = {
    PATIENT: [/^\/dashboard\/patient/],
    DOCTOR: [/^\/dashboard\/doctor/],
    ADMIN: [/^\/dashboard\/admin/],
    SUPPER_ADMIN: [/^\/dashboard\/supper-admin/],
 }
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;
const accessToken = cookies().get("accessToken")?.value;
console.log(accessToken,"======================================================")
   if(!accessToken){
        if(AuthRoutes.includes(pathname)){
            return NextResponse.next()
        }
            return NextResponse.redirect(new URL('/login', request.url))
    }
    if(accessToken && commonPrivateRoutes.includes(pathname)){
       return NextResponse.next()
   }
   let decodedUser = null;
   if(accessToken){
        decodedUser = jwtDecode(accessToken) as any
    }
    const role = decodedUser?.role;

    if(role && roleBasePrivateRoutes[role as Role]){
        const routes = roleBasePrivateRoutes[role as Role];
       if( routes.some((route) => pathname.match(route))){
        return NextResponse.next()
       }
    }
    // if(role === "DOCTOR" && pathname.startsWith('/dashboard/doctor')){
    //     return NextResponse.next()
    // }
    // if(role === "PATIENT" && pathname.startsWith('/dashboard/patient')){
    //     return NextResponse.next()
    // }
    // if(role === "SUPPER_ADMIN" && pathname.startsWith('/dashboard/supper-admin')){
    //     return NextResponse.next()
    // }
    return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/register','/dashboard/:page*'],
}