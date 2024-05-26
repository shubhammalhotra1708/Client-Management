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
    status: 0,
    message: "",
  }
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button aria-disabled={pending} variant="outline" disabled={pending} className="mr-11 min-w-20" type="submit">
        {pending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : "Log out"}
      </Button>
    );
  }
  const [state, formAction] = useFormState(logout, initialState);
  //toast
  useEffect(() => {
    if(state.active == true){
      if(state.status == 200){
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