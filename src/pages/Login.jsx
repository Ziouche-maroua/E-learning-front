


import React, { useEffect, useState } from "react";


import { Link, useNavigate } from "react-router-dom";
import logImage from "../assets/images/log-image.jpg";
import emailIcon from "../assets/images/email.png";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:3001/api/student/login",
        data
      );
      console.log(loginResponse.data);

      // Handle successful login
      if (loginResponse.status === 200) {
        toast.success("Successful login");
        await Cookies.set("token", loginResponse.data.token);
        navigate("/"); // Store token in cookie, expires in 7 days
      } else {
        toast.error("Login failed");
      }
    } catch (loginError) {
      // Handle any errors that occurred during the login attempt
      console.error(loginError);

      if (loginError.response && loginError.response.status === 404) {
        toast.error("account not exsist");
      } else if (loginError.response && loginError.response.status === 401) {
        toast.error("Invalid credentials");
      } else {
        toast.error("An error occurred during login");
      }
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up clicked");
    // Handle Google sign up logic here
  };

  const handleMicrosoftSignUp = () => {
    console.log("Microsoft sign up clicked");
    // Handle Microsoft sign up logic here
  };

  return (
    <div className="bg-[#e5f5fa] w-full h-screen flex justify-center items-center overflow-auto">
      <div className="flex flex-col md:flex-row bg-[#e5f5fa] rounded-lg overflow-hidden max-w-6xl w-full">
        <div className="md:w-1/3 flex justify-center items-center p-4">
          <img
            src={logImage}
            alt="LogImage"
            className="w-full max-h-96 object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-2">Welcome to</h2>
            <h3 className="text-4xl font-bold text-[#67adee]">FikrSight</h3>
          </div>
          <p className="text-lg font-light mb-6">
            Create your account and unlock a world of knowledge at your
            fingertips
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
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
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                type="submit"
                className="w-[113px] h-[40px] bg-[#5fa1f0] rounded-[10px] text-white font-bold shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Log in
              </button>
              <div className="flex items-center">
                <span className="ml-2">Don't have an account?</span>
                <Link to="/signup" className="ml-2 text-[#79bffb] font-bold">
                  Go to Sign up
                </Link>
              </div>
            </div>
          </form>
          <span className="block text-lg font-extralight text-[#000] mt-6">
            Or you can join with
          </span>
          <div className="flex gap-6 mt-4">
            <button
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center w-[160px] h-[45px] bg-[#79bffb] text-white font-semibold rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
              Sign up with
            </button>
            <button
              onClick={handleMicrosoftSignUp}
              className="flex items-center justify-center w-[160px] h-[45px] bg-[#79bffb] text-white font-semibold rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <img
                src={microsoftIcon}
                alt="Microsoft"
                className="w-6 h-6 mr-2"
              />
              Sign up with
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 


