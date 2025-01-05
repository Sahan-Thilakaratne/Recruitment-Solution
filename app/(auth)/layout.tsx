import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, IBM_Plex_Serif } from "next/font/google"





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        
        {children}

    </main>
      
  );
}
