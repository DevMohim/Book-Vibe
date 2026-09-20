import type { Metadata } from "next";
import { Work_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BookProvider from "@/context/BookContext";
import { ToastContainer } from "react-toastify";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe | Home",
  description: "This is home page of book vibe website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${workSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BookProvider>
          <Navbar />
          {children}
          <Footer />


          <ToastContainer />
        </BookProvider>
      </body>
    </html>
  );
}
