import Head from "next/head";
import React from "react";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <img src="https://i.pinimg.com/564x/04/9b/b7/049bb76d791ec7ecf0d14a64efe99fbe.jpg"></img>
        <img src="https://i.pinimg.com/564x/d6/29/c9/d629c9f1e5bbb45c1b884e02fda8d11f.jpg"></img>
        <div className="flex font-black w-200 justify-center items-center text-xl mx-20 h-20 w-50 px-3 bg-slate-300">
          I love Flayu!
        </div>
      </div>
    </>
  );
}
