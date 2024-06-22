import { SignIn } from "@/components/sign-in";

export default function Home() {
  return (
    <main className="bg-[url('/Login.png')] bg-cover  h-screen max-w-full text-white">
      <div>Login</div>
      <SignIn />
    </main>
  );
}
