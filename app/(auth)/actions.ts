"use server"


import { z } from "zod";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

const testUser = {
  id: "1",
  email: "contact@cosdensolutions.io",
  password: "12345678",
};

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(Email: any, Password: any) {
  
    const email = Email;
    const password = Password;

  //const { email, password } = result.data;

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  //await createSession(testUser.id);
  await createSession(testUser.id);

  redirect("/");
}

export async function logout() {
  //await deleteSession();
  await deleteSession();
  redirect("/login");
}
