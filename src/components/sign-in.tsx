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
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={` mb-3 text-2xl text-black`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative  text-black">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <p aria-live="polite" className="text-12 text-red-500">
                {state?.msg == "Invalid Email" && state?.msg}
              </p>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative text-black">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={3}
                />
                <p aria-live="polite" className="text-12 text-red-500">
                  {state?.msg == "Invalid Password" && state?.msg}
                </p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full text-black">Log in</button>
        </div>
      </form>
    </>
  );
}
