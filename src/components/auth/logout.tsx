"use client"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom"
import { useFormState } from "react-dom"
import { toast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import { Icons } from "@/components/ui/icons"


export interface LogoutProps extends React.HTMLAttributes<HTMLDivElement> {
  logout: any;
}

export const LogoutComp = ({ className, logout, ...props }: LogoutProps) => {
  const initialState = {
    active: false,
    status: false,
    message: "",
  }
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button aria-disabled={pending} disabled={pending} className="mx-4" type="submit">
        {pending ? <Icons.spinner className="mr-2 h-4 w-3 animate-spin" /> : "Log out"}
      </Button>
    );
  }
  const [state, formAction] = useFormState(logout, initialState);
  //toast
  useEffect(() => {
    // console.log(`active: ${state.active} in useffect`)
    if(state.active == true){
      if(state.status == true){
        redirect("/login")
      }else{
        toast({
          title: "Error in loggin out",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state])

  return (
    <section>
      <form
        action={formAction}
      >
        <SubmitButton />
      </form>
    </section>
  );

}