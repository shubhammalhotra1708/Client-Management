import { LoginForm } from "@/components/custom/auth/login-form"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { login } from "@/actions/auth/loginActions";
import logo from "@/../public/logo.png"


export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication form",
}

export default function Login() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0">

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          {/* grid managing the left div , logo and heading  */}
          <div className="relative z-20 h-full grid grid-rows-9 mb-10 items-center text-lg font-medium">

            <div className="text-2xl -mt-4 content-start gap-20 font-semibold tracking-tight">
             WiFi Agent Tool
            </div>
            <div className="row-span-8">
            <Image src={logo} alt="Arista WiFi Agent" />

            </div>

          </div>
          <div className="relative z-20 mt-auto pb-2">
            <blockquote className="space-y-2 ">
              <p className="px-8 text-center text-sm text-muted-foreground">
                {/* &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo; */}
                &ldquo;Welcome to Arista Client Management System. Incase of any bugs - Kindly contact Systest Team.&rdquo;

              </p>
              {/* <footer className="text-sm">WiFi Tools</footer> */}
            </blockquote>
          </div>
        </div>
        {/* right side div */}
        <div className="lg:p-8 col-span-2">
          {/* container for top right button and text */}
        <div className="absolute right-20 top-20 md:right-12 md:top-12 flex flex-row">
          <p className="text-sm text-muted-foreground mt-2 mr-1">
            Not registered ?
          </p>
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "ghost" }),
            )}
          >
            Sign Up
          </Link>
        </div>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Log In
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to log in
              </p>
            </div>

            <LoginForm login={login} />

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              {/* <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              > */}
              Terms of Service
              {/* </Link>{" "} */}
              {" "}and{" "}
              {/* <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              > */}
              Privacy Policy
              {/* </Link> */}
              .
            </p>
          </div>
        </div>
        
      </div>
    </>
  )
}