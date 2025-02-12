'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useActionState, useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { Loader2 } from 'lucide-react'
import { Select, SelectItem } from '@/components/ui/select';
import { login } from '@/app/(auth)/actions'
 



const signUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
  role: z.enum(["recruiter", "employee"]),
});

// Define the form schema for sign-in
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});




export const AuthForm = ({ type }: { type: 'sign-in' | 'sign-up' }) => {

  

  const formSchema = type === 'sign-up' ? signUpSchema : signInSchema;

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: type === 'sign-up' ? {
      fullName: "",
      email: "",
      password: "",
      address: "",
      contactNumber: "",
      role: "employee", // Default role
    } : {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    setIsLoading(true)
    console.log(values);
    await login('sahan@gmail.com', 'sahan123');
    setIsLoading(false)

  };

  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
          <Image src="/icons/logo.svg" width={34} height={34} alt='header logo' />
          <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
            Recruitment Solution
          </h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>

            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            
          </h1>
          <p className='text-16 font-normal text-gray-500'>
            {user ? 'Link your account to continue' : 'Enter your details below'}
          </p>
        </div>
      </header>

      {user ? (
        <div className='flex flex-col gap-4'>
          {/* User linked account content */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Render fullName field only for sign-up */}
              {type === 'sign-up' && (
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <div className='form-item'>
                      <FormLabel className='form-label'>Full Name</FormLabel>
                      <div className='flex w-full flex-col'>
                        <FormControl>
                          <Input placeholder='Enter your Full Name' className='input-class' {...field} />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                      </div>
                    </div>
                  )}
                />
              )}

              {/* Email field (common for both sign-in and sign-up) */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form-label'>Email</FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input placeholder='Enter your Email' className='input-class' {...field} />
                      </FormControl>
                      <FormMessage className='form-message mt-2' />
                    </div>
                  </div>
                )}
              />

              {/* Password field (common for both sign-in and sign-up) */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form-label'>Password</FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input placeholder='Enter your Password' className='input-class' type='password' {...field} />
                      </FormControl>
                      <FormMessage className='form-message mt-2' />
                    </div>
                  </div>
                )}
              />

              {/* Render additional fields only for sign-up */}
              {type === 'sign-up' && (
                <>
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <div className='form-item'>
                        <FormLabel className='form-label'>Address</FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input placeholder='Enter your Address' className='input-class' {...field} />
                          </FormControl>
                          <FormMessage className='form-message mt-2' />
                        </div>
                      </div>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <div className='form-item'>
                        <FormLabel className='form-label'>Contact Number</FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <Input placeholder='Enter your Contact Number' className='input-class' {...field} />
                          </FormControl>
                          <FormMessage className='form-message mt-2' />
                        </div>
                      </div>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <div className='form-item'>
                        <FormLabel className='form-label'>Role</FormLabel>
                        <div className='flex w-full flex-col'>
                          <FormControl>
                            <select className='input-class' {...field}>
                              <option value="recruiter">Recruiter</option>
                              <option value="employee">Employee</option>
                            </select>
                          </FormControl>
                          <FormMessage className='form-message mt-2' />
                        </div>
                      </div>
                    )}
                  />
                </>
              )}

              <div className='flex flex-col gap-4'>
                <Button type="submit" className='form-btn' disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                    </>
                  ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>
              {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};