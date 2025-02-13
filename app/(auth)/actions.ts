"use server"


import { z } from "zod";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { error } from "console";
import { errors } from "jose";

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
  console.log("Here it works: ", Email, Password)
    try{
      const response = await fetch("http://localhost:9090/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: Email, password: Password}),
      })

      const data = await response.json();
      console.log("Response: ", response)

      if(!response.ok) {
        return{
          errors: {
            email: [data.message || "Invalid email or password"],
          }
        }
      }

      const username = data.fullname;

      if(!username){
        return{
          errors: {
            email: ["Invalid response from server"]
          }
        }
      }

      await createSession(username);

      //

    }catch (error){
      
      console.error("Login failed", error);
      return{
        errors: {
          email: ["Something went wrong. Please try again later."]
        }
      }
    }

    redirect("/");
}

export async function logout() {
  //await deleteSession();
  await deleteSession();
  redirect("/login");
}