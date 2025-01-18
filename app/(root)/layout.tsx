import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google"
import { Sidebar } from "@/components/Sidebar";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Sahan', lastName: 'Thilakaratne' };

  return (
    <main className="flex h-screen w-full font-inter">
      
        <Sidebar user={loggedIn} />
        {children}

    </main>
      
  );
}
