import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Login Form</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6  bg-gray-400  hover:bg-black hover:text-white ">
            Login
          </button>
          <button className=" flex flex-row justify-center items-center gap-[10px] w-full border border-gray-300 text-md p-2 rounded-lg mb-6  bg-gray-400  hover:bg-black hover:text-white ">
            <FcGoogle className=" text-lg" />
            Login with Google
          </button>
          <div className="text-center text-gray-400">
            Dont'have an account?
            <Link to="/register">
              <span className="text-blue-500 text-opacity-100 ml-1 p-1">
                Register
              </span>
            </Link>
            now.
          </div>
        </div>
        {/* /* right side * */}
        <div className="relative">
          <img
            src="/public/images/2.jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              We've been uesing Untitle to kick"
              <br />
              start every new project and can't <br />
              imagine working without it."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
