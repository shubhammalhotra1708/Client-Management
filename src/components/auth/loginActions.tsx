"use server"
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const secretKey = process.env.SECRET
const key = new TextEncoder().encode(secretKey);
const baseUrl = process.env.BASE_URL;


export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1y")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}


export async function signup(
  prevState: any,
  formData: FormData
){
  "use server"
  // Verify credentials && get the user
  const data= Object.fromEntries(formData);
  const bd = {
    "email" : `${data.emailLogin}`,
    "password" : `${data.passwordLogin}`,
    "full_name" : `${data.full_name}`,
   
  };

  console.log(`hi ${JSON.stringify(bd)}`)
  const settings = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(bd),
  };

  try {
    const fetchResponse = await fetch(`${baseUrl}/auth/register/`, settings);
    console.log(`${baseUrl}/auth/register/`)
    const res = await fetchResponse.json();
  
    //browser cookie expiration
    const expires = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    const usr = await encrypt({ user : res.user,expires });
    const session = await encrypt({ token : res.token,expires });
    //set cookies
    cookies().set("user", session, {  httpOnly: true });
    cookies().set("session", session, {  httpOnly: true });


    return {active:true,status: true, resStatus:fetchResponse.status, message: res.email}
  } catch (e) {
    console.log(e);
    return {active:true, status: false,message : "error reaching api response - catch block"}
  }  

}

export async function login(
  prevState: any,
  formData: FormData
){
  "use server"
  // Verify credentials && get the user

  const data= Object.fromEntries(formData);
  const bd = {
    "email" : `${data.emailLogin}`,
    "password" : `${data.passwordLogin}`,
   
  };

  console.log(`hi ${JSON.stringify(bd)}`)
  const settings = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(bd),
  };

  try {
    const fetchResponse = await fetch(`${baseUrl}/auth/login/`, settings);
    console.log(`${baseUrl}/auth/login/`)
    const res = await fetchResponse.json();
   
    //browser cookie expiration
    const expires = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    const usr = await encrypt({ user : res.user,expires });

    const session = await encrypt({ token : res.token,expires });
    //set cookies
    cookies().set("user", usr, {  httpOnly: true });
    cookies().set("session", session, {  httpOnly: true });


    return {active:true,status: true, resStatus:fetchResponse.status, message: res.error}
  } catch (e) {
    console.log(e);
    return {active:true, status: false,message : "error reaching api response - catch block"}
  }  

}

export async function logout() {
  "use server"
  const session = await getSession();
  const token = session.token;  
  // console.log(`logout token is ${token}`)
  const settings = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.token}`
    },
    method: 'POST',
  };
  try {
    const fetchResponse = await fetch(`${baseUrl}/auth/logout/`, settings);
    console.log(`${baseUrl}/auth/logout/`)
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
    cookies().set("user", "", { expires: new Date(0) });

    return {active:true, status: false , message: "logged out"}
  } catch (e) {
    console.log(e);
    return {active:true, status: true, message : "error reaching api response - catch block"}
  }  

}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
export async function getUser() {
  const user = cookies().get("user")?.value;
  if (!user) return null;
  return await decrypt(user);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}