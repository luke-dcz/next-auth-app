"use client";

import { credentialLogin } from "@/app/actions";
import { Input } from "./input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const res = await credentialLogin(formData);

      if (!!res.error) {
        setError(res.error.message);
      } else {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      setError("Check your credentials");
    }
  }

  return (
    <>
      <div className="text-red-500">{error}</div>
      <form
        className="flex flex-col justify-center bg-zinc-800 rounded p-4 items-center gap-4"
        onSubmit={handleSubmit}
      >
        <h3>Email/Password Login:</h3>
        <Input type="email" id="email" label="Email:" />
        <Input type="password" id="password" label="Password:" />
        <button>Sign In</button>
      </form>
    </>
  );
};
