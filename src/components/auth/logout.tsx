import { getSession, login, logout } from "@/components/auth/loginActions";
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

export const Logout = ()=> {
  return (
    <section>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/login");
        }}
      >
        <Button className="mr-4 -mt-2" type="submit">Log Out</Button>
      </form>
    </section>
  );

}