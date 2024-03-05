"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  let [data, setData] = useState({ username: "", password: "" });

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const options = { method: "POST", body: JSON.stringify(data) };
    let res = await (await fetch("/api/login", options)).json();

    if (res["status"] === "success") {
      console.log(data);
      setData({ username: "", password: "" });
      toast.success("Login Successfull. Redirecting...");
      setTimeout(window.location.href = "/profile", 5000);
    } else {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required=""
            value={data.username}
            onChange={(e) => {
              inputOnChange("username", e.target.value.toLowerCase());
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            value={data.password}
            onChange={(e) => {
              inputOnChange("password", e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={formSubmit}
          className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Sign in
        </button>
      </form>

      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Form;
