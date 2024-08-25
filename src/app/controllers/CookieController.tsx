'use server'
 
import { cookies } from 'next/headers'

// Async function to create a cookie
export async function createCookie(event: FormData) {

    const eLightToken = event.get('lighttoken') as string
    const eRemoteToken = event.get('remotetoken') as string

    // Set Cookies
    cookies().set({  
        name: "isLoggedIn",  
        value: 'true',  
        httpOnly: true,  
        sameSite: "strict",  
        secure: true,  
    })  

}
     
// Async function to delete a cookie
export async function deleteCookie(cookieName: string) {
    cookies().delete(cookieName);
}

export async function getCookie(cookieName: string){
    const cookieStore = cookies()
    const cookie = cookieStore.get(cookieName);

    return cookie
}


