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
      //console.log("Response: ", response)

      if(response.status === 401) {
        
        return { errorMessage: data.message || "Invalid email or password" };

      }

      if(!data.fullname){
        return { errorMessage: "Invalid response from server" };
      }

      const username = data.fullname;


      await createSession(username);

    }catch (error){
      
      console.error("Login failed", error);
      return{
        errorMessage: "An error occurred while logging in",
      }
    }

    //Local storage setting

    try{

      const response = await fetch('http://localhost:9090/api/users/getUserDetails', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "sahan@gmail.com"
        }),
        
      });

      const data = await response.json();
      

      if(response.status !== 200){
        return{ errors: { email: [data.message || "Invalid email"]}};
      }

      //await directToPages();

      return {data: data.fullname};

      
    }catch(error){
      console.error("Error: ", error)
    }


}


export async function directToPages(){
  console.log("Logging this")
  redirect("/")
}
 

export async function logout() {
  //await deleteSession();
  await deleteSession();
  redirect("/login");
}


