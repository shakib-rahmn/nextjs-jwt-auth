import Form from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="text-center mb-6">
        <h2 className="text-2xl mb-2">Credentials</h2>
        <p><span className="font-bold">username:</span> johndoe</p>
        <p><span className="font-bold">password:</span> 12345</p>
      </div>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default page;
