import { NextRequest } from "next/server";
import { updateSession } from "@/actions/auth/loginActions";

export async function middleware(request: NextRequest) {
  // return await updateSession(request);
  return;
}