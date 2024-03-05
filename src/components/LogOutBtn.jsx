'use client'
import Link from "next/link";
import React from "react";

const LogOutBtn = () => {
  const logout = async (e) => {
    e.preventDefault();
    const options = { method: "GET" };
    await fetch("/api/login", options);
    window.location.reload();
  };

  return (
    <Link
      href="#!"
      onClick={logout}
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
    >
      Logout
    </Link>
  );
};

export default LogOutBtn;
