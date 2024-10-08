import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailIcon from "../assets/images/email.png";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import TopBar from "../components/TopBar";

const Login = () => {
  const apiUrl =  process.env.REACT_APP_API_URL; 
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const loginResponse = await axios.post(
        `${apiUrl}/api/student/login`,
        data
      );
      console.log(loginResponse.data);

      if (loginResponse.status === 200) {
        toast.success("Successful login");
        Cookies.set("token", loginResponse.data.token); // Store token in cookie, no await needed
        const route = Cookies.get("redirectAfterSignup");
        if (route) {
          navigate(route);
          Cookies.remove("redirectAfterSignup");
        } else navigate("/");
      } else {
        toast.error("Login failed");
      }
    } catch (loginError) {
      // Handle any errors that occurred during the login attempt
      console.error(loginError);
      if (loginError.response && loginError.response.status === 404) {
        toast.error("Account does not exist");
      } else if (loginError.response && loginError.response.status === 401) {
        toast.error("Invalid credentials");
      } else {
        toast.error("An error occurred during login");
      }
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Handle Google login logic here
  };

  const handleMicrosoftLogin = () => {
    console.log('Microsoft login clicked');
    // Handle Microsoft login logic here
  };

  return (
    <div>
    <TopBar/>
    <div className="pt-24 w-full h-screen flex justify-center items-center overflow-auto">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden max-w-6xl w-full justify-center items-center">
        
        <div className="md:w-2/3 p-8 md:p-16 flex flex-col justify-center items-center">
          
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl poetsen-font text-[#ffc107]">
              Welcome Back!
            </h2>
          </div>
          
          <div>
            <span className="mr-2">Don't have an account?</span>
            <Link to="/signup" className="ml-2 text-[#ffc107] font-bold">
              Sign up
            </Link>
          </div>
          {/* google and microsoft login */}
          <div className="flex justify-between w-full mt-4 gap-2"> {/* Adjusted gap */}
  <button
    onClick={handleGoogleLogin}
    className="flex items-center justify-center w-[140px] md:w-[160px] h-[40px] bg-[#283593] text-white font-semibold rounded-md shadow-md hover:bg-[#3f51b5] focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:ring-offset-2"
  >
    <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" /> {/* Adjusted icon size */}
    <span className="hidden md:inline">Log in with</span>
  </button>
  <button
    onClick={handleMicrosoftLogin}
    className="flex items-center justify-center w-[140px] md:w-[160px] h-[40px] bg-[#283593] text-white font-semibold rounded-md shadow-md hover:bg-[#3f51b5] focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:ring-offset-2"
  >
    <img src={microsoftIcon} alt="Microsoft" className="w-5 h-5 mr-2" /> {/* Adjusted icon size */}
    <span className="hidden md:inline">Log in with</span>
  </button>
</div>
          
          {/* Divider line with "or" */}
          <div className="flex items-center my-6 w-full">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-2">or</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-3 w-full text-black bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee] text-lg"
                  {...register("email", {
                    required: "Please enter your email",
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                <img
                  src={emailIcon}
                  alt="Email"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
              </div>
  
              {/* Password Input */}
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-4 py-3 w-full text-black  bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee] text-lg"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                 <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={togglePasswordVisibility}
  >
    {showPassword ? "🔒" : "👁️"} 
  </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full sm:w-[140px] md:w-[160px] lg:w-[180px] h-[48px] bg-[#283593] rounded-full text-white font-bold shadow-md hover:bg-[#3f51b5] focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:ring-offset-2"
              >
                Log in
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Login;
