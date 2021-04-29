import React, { useState } from "react";
function Index() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-extrabold leading-tight">
              The Freedom to Create the{" "}
              <span className="text-indigo-700">Websites</span> You Want
            </h1>
            <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-center text-lg sm:text-lg">
              A professional website drives sales. Create a beautiful website to
              impress and engage new customers – and establish your business
              online.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
