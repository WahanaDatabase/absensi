"use client";
import { authenticate } from "@/lib/actions";

import { useFormState } from "react-dom";

export function SignIn() {
  const initialState = {
    msg: "",
  };
  const [state, formAction] = useFormState(authenticate, initialState);

  return (
    <>
      <form action={formAction}>
        <div className="flex-1   rounded-lg px-6 pb-4 pt-8">
          <div className="w-[412px]">
            <div>
              <div className="relative  text-black">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="relative text-black">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  required
                  minLength={3}
                />
                <p aria-live="polite" className="text-12 text-red-500">
                  {state?.msg}
                </p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-[412px] mx-auto bg-white flex items-center h-[62px] justify-center">
            <p className=" text-[#2148C0]">LOGIN</p>
          </button>
        </div>
      </form>
    </>
  );
}
