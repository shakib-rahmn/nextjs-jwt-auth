import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JWT Auth",
  description: "Simple user authenticatino using JWT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-screen-xl mx-auto mt-[100px] p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
