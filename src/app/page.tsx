import { SignIn } from "@/components/sign-in";
import { SignInGoogle } from "@/components/sign-inGoogle";

export default function Home() {
  return (
    <main className="bg-login bg-cover  h-screen max-w-full text-white">
      <div>Login</div>
      <SignInGoogle />
      <SignIn />
    </main>
  );
}
