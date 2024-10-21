"use server"

import { signIn, signOut } from "@/auth";

export async function credentialLogin(formData: FormData) {
	try {
	  const res = await signIn("credentials", {
		email: formData.get("email"),
		password: formData.get("password"),
		redirect: false,
	  });
	  return res;
	} catch (error) {
	  console.log(error);
	}
}

export async function logout() {
	await signOut({ redirectTo: "/" });
}