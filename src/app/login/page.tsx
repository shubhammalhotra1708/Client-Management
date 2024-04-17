// import { getSession, login } from "@/components/auth/loginActions";
// import { LoginForm } from "@/components/auth/login-form"
// import { Logout } from "@/components/auth/logout";


// export default async function Page() {
//   const session = await getSession();
//   return (
//     <section>
//       <LoginForm login={login} />
//       <Logout />

//     </section>
//   );
// }
import { LoginForm } from "@/components/auth/login-form"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getSession, login } from "@/components/auth/loginActions";


export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication form",
}

export default function Login() {
  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div> */}
      <div className="container relative hidden h-[893px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute right-4 top-4 md:right-8 md:top-8 flex flex-row">
          <p className="text-sm text-muted-foreground mt-2 mr-1">
            Not registered ?
          </p>
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              // "absolute right-4 top-4 md:right-8 md:top-8"
            )}
          >
            Sign Up
          </Link>
        </div>

        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">

            {/* <svg
              xmlns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAjVBMVEX///8aN2fv8fT4+fsAJV8AJ16ttMIALGEAIFsAIlwAHFkWNWbq7PALL2OLlatpd5PV2eBFV3zj5eqZobMiPGsAGFjIzddNX4Kmrr5wfZg3TXa4v8va3eQAGVhebYyAi6M6T3crQ29VZocAAFAAEFW+xNCPma6DjqYAAFPN0dupsMAAElZ3g51jcpAAC1OSpWHqAAAHDUlEQVR4nO2a63aqOhSFNyCSELGtt1q1rbTbdvd23v/xjmYtlNxA3DLGGWfM708tBBInWVf89QsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8H8iieM4fDZuITA+6XCX0XkzOXO50/TNpBAiXwXVev9H5lIwzkcpy4edMf5pfjj7OqodSqYv+SB4C/E6pWFlbg/ITV5v6xPFq1zmhTl53ygVRVF2Fzo9zqJGVCHLj9r4m+JwNK9pNVVp0XCD4p4nSpsniqLBpr6w+8PCVNRgElfnnZYol4HzbVodFvy7drGj1bdQzQpM9LDJvHUeQ6u10Mey5+tLEmIy4IWIkX/AGVrtpTmJZWv1MGi+NB3TuLtmRW2t4ojH54Zh9sp9ZR7FjX9ApZXyw1fPF9V4S6t3GTVeX2xp3FJ672sckjWtHqpHqMp+hHFZnp567neTrFU28CPotJpV402tJrn+1krKwPU5+brNH+s4i5XWj72etPrITxtz2qM+NeLstPPVzOsmSat0l/iJp6m+xWDI402tnvXVxWwRuDzhoO8cXh3uqlLf2AOzmsWmkx4VOvFEFshbx+smSSsR9gq3emuqFf9raqW9iiq7p0HkvtLAWQ5IhR5UBdJ+qWLJlJzK3CdIq1a/PvXCM1bH0GoiDOfVAa2VGvhPTr5oQ41JLLHufv+uJLSTswf+gkp5BrVrNdJWKNiZGFoNDzKqS557477aVvuJcrK9qV4wQzfImaj9gkYi6CbbtSLnEdaq+LlgbU37aklmIPZ+akWqXTJDJz4eT/GPp/9y3eQZWqkWrV4uWBxp5d1X8Zz23CEx2/F36NsKS7JAyqsoz/K4yXatKJ31ajXSoT3fhC8O0bCvKCBxMKE865Lo0YUpxRL2yRMudYb2sHattDrHlNCMg/p5qGCxGSas1ZpMIKUVJZSypL2WOlzcHOtAdpPKTrJatVrqC49pv6nVmPOr9cRHw/KCNhhTTp998/87crXzC/bu2VAsUVvrQGa7yZpWUw9vK9JYVl/c1Cqm7apS6UGU5VvoKwb3FQek6Gh0L3WT7IWhtB/HgsoGabnJmla7P2nmQAl0dqwmrXpwWdWDPpTK8id/8hXKGbi4qRVkI0qyBr2VOgl1QKoiX8NucmaOrNvgxzzQDFCr42O2+ww/LW2pIvOaYmhfUUpoFPpvtLPnfZU6T56Ny27SKnUMfzUqvV27orY93f5V3txtUV6xAvuKA1JqeFVOsi5JTc5gwbHErIi55DFLHdO3Jx6x1GBVi9huX3ShZNHUz/Gm3f59teHKdWkU27dkl8KJ4dcgKXmdmRC5zIVudH9tOckyaxIrDiaro1iKHJaYGS1VV6u9o3soy5lLJPmrP7hL9O+rqttWVA35/eIfC7bCqJdS59vX65SjfWVHn+pu0s4ZjmKpl7fxnjcrm/BpFSDZ8EK+3G6QN2cYegKFkrtjYfvt3Oav2UiPB0nf9memlHRltUju5FfJlsRSpbff1UGrPWttPqlrPT6tYl87Wkdg9ily4dznb1l5pOJEiyv4p9NgNxc9iqV8TrmbVjTcU/v6tPrxBBbuUPZV6nAsMf1syr1c6gzV3KQnb0/uuHGsPNl8R63WgU6ERyvag9a6c1op57zaOK7IhmJ4MStXe8rt7G62Lcsq0eK3dOL4gLw1zhNZg5q79X1HrXR17Xm/4Pp2DkhqVh4WzGvfVhYw1DFcXVKmN+BLrWoUlhX668FnSi+i3PE0HbW6lZbNM27OQHFAFQEz41Jne+a8Z0EPIHoMPQAudR6rd8mB2vmZvKlyxOqo1TRrsMH6vtpQpSFCL+X5Xew13+oklAI2GLblJkN9hkqsuSVWN61G+uVFNnZOOPuqdKKOxZQbJRc09wO0BwxLzWBPhsWKLLE6aXVLcz26d7f31RlKlFcudSoLa0pE2EpzygjC/Su/WK5W3z8h7kXwpZW1ryaPqtXC2qy0K7bn9mJ4/4Ze37vwiOVotcyLEJTnKfnh3tvaV2d5bm5tZddJsrhwGjT/EGcjag+xqS86pjcDkai1SGytYuXJfA2k663s/IozAtGcEXBWcZ1Sp8o029561FvxjT3kHf9eKD0FMlurm7bf2eTeVrmh1ShrC0gEN0oaPcy5uBVMgNVpYHO/fSFtsSytdrkjjkEm/D/8MrS6ObeCebpakjX9J9W057abuR74uv8e7/rja+jdxELQPb+q8POT6/GsVZIN0gakfA50M7fycP63/ryjdc/bt0tMq/n93jqyjSFxTpzgoXunvfg8/P0MxurbTxq5ZAe90/99xubZAB/BnbKm29Q+D89p5fF8oR8pAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+4/wLx0x3N4vGEsUAAAAASUVORK5CYII="
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg> */}
            Arista WiFi Agent
          </div>
          <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
              <p className="text-lg">
                {/* &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo; */}
                &ldquo;Welcome to Arista Client Management System. Incase of any bugs - Kindly contact Systest Team.&rdquo;

              </p>
              <footer className="text-sm">WiFi Tools</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
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