import React, { useState } from "react";
import PasswordSvg from "../../../svgs/PasswordSvg";

export default function InputFieldsLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <form className="w-full">
      <div className="text-xl text-[#012831] mb-12 w-full flex justify-between tracking-wider">
        <div>
          <input type="radio" value="mobilenumber" />
          <label> Mobile Number</label>
        </div>
        <div>
          <input type="radio" value="Email" />
          <label> Email Id</label>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-11">
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-4 bg-inherit border mb-6 rounded-lg w-full border-[#717A7C] text-[#717A7C]"
          ></input>

          <div className="border rounded-lg w-full relative mb-5 border-[#717A7C]">
            <div className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2">
              <PasswordSvg />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="py-4 pl-14 pr-16 bg-inherit w-full text-[#717A7C]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-[#717A7C]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div>
            <p className="hover:underline cursor-pointer w-full text-end">
              Forgot your Password ?
            </p>
          </div>
        </div>

        <div>
          <button className="w-full mb-8 bg-green-400 text-white p-4 rounded-xl">
            Log in
          </button>
          <button className="w-full mb-8 bg-inherit border-2 border-black p-4 rounded-xl">
            Log In with Google
          </button>
        </div>

        <div>
          <p className="w-full flex gap-2 justify-end">
            Don’t have an account yet?
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign Up!
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}
