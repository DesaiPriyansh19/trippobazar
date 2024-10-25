import React from "react";
import LeftArrowSvg from "../../../svgs/LeftArrowSvg";
import CompanyLogo from "../../../svgs/CompanyLogo";

import InputFieldsLogin from "./InputFieldsLogin";

export default function LoginPage() {
  return (
    <div className=" w-full font-poppins flex justify-center bg-login-image relative items-center min-h-screen">
      <div className="absolute top-0 min-h-screen left-1/2 bg-white opacity-50 w-1/2 p-3"></div>
      <div className="absolute top-0 min-h-screen  backdrop-blur-md left-1/2 w-1/2 p-3">
        <div className="mt-12 ml-12 cursor-pointer">
          <LeftArrowSvg />
        </div>

        <div className="flex w-full justify-center items-center">
          <div className="max-w-md w-full flex flex-col items-center">
            <CompanyLogo className="mb-3" />
            <h1 className="text-5xl font-semibold leading-[86px] mb-6">
              Welcome Back
            </h1>
            <InputFieldsLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
