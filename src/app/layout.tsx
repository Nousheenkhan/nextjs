import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className="bg-gray-100 flex flex-col min-h-screen">
       {/* Navbar */}
       <header className="bg-blue-600 text-white shadow-md">
         <div className="container mx-auto p-4 flex justify-between items-center">
           <h1 className="text-2xl font-bold">
             <Link href="/">MyWebsite</Link>
           </h1>
           <nav>
             <ul className="flex space-x-4">
               <li>
                 <Link href="/" className="hover:text-blue-300">
                   Home
                 </Link>
               </li>
               <li>
                 <Link href="/about" className="hover:text-blue-300">
                   About
                 </Link>
               </li>
               <li>
                 <Link href="/contact" className="hover:text-blue-300">
                   Contact
                 </Link>
               </li>
             </ul>
           </nav>
         </div>
       </header>

       {/* Main Content */}
       <main className="flex-grow container mx-auto p-6">{children}</main>

       {/* Footer */}
       <footer className="bg-blue-600 text-white text-center p-4">
         <p>© 2024 My Website. All Rights Reserved.</p>
       </footer>
     </body>
   </html>
  );
}
