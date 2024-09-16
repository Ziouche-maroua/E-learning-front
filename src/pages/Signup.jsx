import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../assets/images/email.png";
import { useForm } from "react-hook-form";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import '../assets/styles/custom.css'
import TopBar from "../components/TopBar";
const Signup = () => {
  const apiUrl =  process.env.REACT_APP_API_URL; 
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const onSubmit = async (data) => {
    console.log(data);
  
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post(
        `${apiUrl}/student/register`,
        data
      );
  
      if (response?.status === 201) {
        console.log(response.data);
        toast.success("Successful registration");
        Cookies.set("token", response.data.token); // Token will expire in 7 days
      }
    } catch (error) {
      // Check if error.response exists and has a status property
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("User already exists");
        } else {
          toast.error("An error has occurred");
        }
      } else {
        // Handle network errors or other issues where error.response is not available
        toast.error("Network error or server not reachable");
      }
      console.error(error);
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
    <div>
    <TopBar />
    <div className="pt-20 w-full h-screen flex justify-center items-center overflow-auto">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden max-w-6xl w-full justify-center items-center">
        
        {/* Content section */}
  <div className="w-full lg:w-2/3 pt-20 p-8 md:p-16 flex flex-col justify-center items-center">
          {/* Title */}
          <div className="mb-4 pt-10">
          <h3 className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl poetsen-font text-[#ffc107]">
                Get Started
          </h3>

          </div>

          {/* Login link */}
          <div>
            <span className="mr-2">Already have an account?</span>
            <Link to="/login" className="ml-2 text-[#ffc107] font-bold">
              Log In
            </Link>
          </div>

        {/* Google and Microsoft Sign-Up */}
<div className="flex justify-between w-full mt-4 gap-2"> {/* Adjusted gap */}
  <button
    onClick={handleGoogleSignUp}
    className="flex items-center justify-center w-[140px] md:w-[160px] h-[40px] bg-[#283593] text-white font-semibold rounded-md shadow-md hover:bg-[#3f51b5] focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:ring-offset-2"
  >
    <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" /> {/* Adjusted icon size */}
    <span className="hidden md:inline">Sign up with</span>
  </button>
  <button
    onClick={handleMicrosoftSignUp}
    className="flex items-center justify-center w-[140px] md:w-[160px] h-[40px] bg-[#283593] text-white font-semibold rounded-md shadow-md hover:bg-[#3f51b5] focus:outline-none focus:ring-2 focus:ring-[#3f51b5] focus:ring-offset-2"
  >
    <img src={microsoftIcon} alt="Microsoft" className="w-5 h-5 mr-2" /> {/* Adjusted icon size */}
    <span className="hidden md:inline">Sign up with</span>
  </button>
</div>



          {/* Divider line with "or" */}
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', width: '100%' }}>
            <hr style={{ flex: 1, border: 'none', borderTop: '1px solid ' }} />
            <span style={{ padding: '0 10px' }}>or</span>
            <hr style={{ flex: 1, border: 'none', borderTop: '1px solid ' }} />
          </div>

          {/* Form section */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          <div className="space-y-4">
  {/* First Name Field */}
  <div className="relative w-full">
    <input
      type="text"
      placeholder="First name"
      className="pl-10 pr-4 py-2 w-full text-black bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
      {...register("first_name", {
        required: "Please enter your first name",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "Invalid first name",
        },
        minLength: {
          value: 3,
          message: "First name must be at least 3 characters",
        },
      })}
    />
    {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
  </div>

  {/* Last Name Field */}
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Last name"
      className="pl-10 pr-4 py-2 w-full text-black  bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
      {...register("last_name", {
        required: "Please enter your last name",
        minLength: {
          value: 3,
          message: "Last name must be at least 3 characters",
        },
      })}
    />
    {errors.last_name && <span className="text-red-500">{errors.last_name.message}</span>}
  </div>

  {/* Matricule Field */}
  <div className="relative w-full">
    <input
      type="text"
      placeholder="Matricule"
      className="pl-10 pr-4 py-2 w-full text-black bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
      {...register("matricule_student", {
        required: "Please enter your matricule",
        minLength: {
          value: 4,
          message: "Matricule must be at least 4 characters",
        },
      })}
    />
    {errors.matricule_student && <span className="text-red-500">{errors.matricule_student.message}</span>}
  </div>

  {/* Email Field */}
  <div className="relative w-full">
    <input
      type="email"
      placeholder="Email"
      className="pl-10 pr-4 py-2 w-full  text-black bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
      {...register("email", {
        required: "Please enter an email",
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Invalid email address",
        },
        minLength: {
          value: 6,
          message: "Email must be at least 6 characters",
        },
      })}
    />
    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
    <img
      src={emailIcon}
      alt="Email"
      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
    />
  </div>

 {/* Password Field */}
<div className="relative w-full">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="pl-10 pr-10 py-2 w-full bg-[#ffffff] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
    {...register("password", {
      required: "Please enter a password",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    })}
  />
  {errors.password && <span className="text-red-500">{errors.password.message}</span>}
  
  {/* Eye Icon for Password Visibility */}
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={togglePasswordVisibility}
  >
   {showPassword ? "🔒" : "👁️"} 
  </div>
</div>

{/* Confirm Password Field */}
<div className="relative w-full">
  <input
    type={showPasswordTwo ? "text" : "password"}
    placeholder="Confirm Password"
    className="pl-10 pr-10 py-2 w-full bg-[#ffffff] border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#67adee] focus:border-[#67adee]"
    {...register("confirmPassword", {
      required: "Please confirm your password",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    })}
  />
  {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
  
  {/* Eye Icon for Confirm Password Visibility */}
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
    onClick={togglePasswordVisibilityTwo}
  >
    {showPasswordTwo ? "🔒" : "👁️"} 
  </div>
</div>

</div>


            {/* Sign up button */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-[113px] h-[40px] bg-[#283593]  rounded-full text-white font-bold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}



export default Signup;

