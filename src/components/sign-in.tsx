import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

import Form from "./form";

export async function SignIn() {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/dashboard");

  return (
    <>
      <Form />
    </>
  );
}
