import Link from "next/link";
import React from "react";
import {cookies} from "next/headers";
import LogOutBtn from "./LogOutBtn";

const Navbar = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token');

  const logout = async (e) => {
    e.preventDefault();

    const options = { method: "POST", body: JSON.stringify(data) };
    let res = await (await fetch("/api/login", options)).json();

    if (res["status"] === "success") {
      setData({ username: "", password: "" });
      toast.success("Login Successfull. Redirecting...");
      setTimeout(window.location.href = "/profile", 3000);
    } else {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            nxtauth
          </span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {token && <Link href={'/profile'} className="me-4">Profile</Link>}
        {
          typeof token === 'undefined' ? (
            <Link
            href="/login"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
          >
            Login
          </Link>
          ) : (
            <LogOutBtn />
          )
        }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
