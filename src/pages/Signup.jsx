import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logImage from "../assets/images/log-image.jpg";
import emailIcon from "../assets/images/email.png";
import { useForm } from "react-hook-form";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";
import axios from "axios";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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
        "http://localhost:3001/api/student/register",
        data
      );
      if (response?.status === 201) {
        console.log(response.data);
        toast.success("Successful registration");
        await Cookies.set("token", response.data.token); // Token will expire in 7 days
        const route = Cookies.get("redirectAfterSignup");
        if (route) {
          navigate(route);
          Cookies.remove("redirectAfterSignup");
        } else navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("User already exists");
        console.log(Cookies.get("token"));
      } else {
        console.error(error);
        toast.error("An error has occurred");
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
        <div className="md:w-1/2 flex justify-center items-center p-4">
          <img
            src={logImage}
            alt="LogImage"
            className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
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
                  type="text"
                  placeholder="First name"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
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
                {errors.first_name && <span>{errors.first_name.message}</span>}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
                  {...register("last_name", {
                    required: "Please enter your last name",

                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 characters",
                    },

                    minLength: {
                      value: 3,
                      message: "Last name must be at least 3 characters",
                    },
                  })}
                />
                {errors.last_name && <span>{errors.last_name.message}</span>}
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Matricule"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
                  {...register("matricule_student", {
                    required: "Please enter your matricule",
                    minLength: {
                      value: 4,
                      message: "Matricule must be at least 4 characters",
                    },
                    maxLength: {
                      value: 4,
                      message: "Matricule must be at most 4 characters",
                    },
                  })}
                />
                {errors.matricule_student && (
                  <span>{errors.matricule_student.message}</span>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
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
                {errors.email && <span>{errors.email.message}</span>}
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
                    required: "Please enter a password",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <div className="relative w-full">
                <input
                  type={showPasswordTwo ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-[113px] h-[40px] bg-[#5fa1f0] rounded-[10px] text-white font-bold shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Sign up
              </button>
              <div className="mt-2">
                <span className="mr-2">Already have an account?</span>
                <Link to="/login" className="ml-2 text-[#79bffb] font-bold">
                  Go to Log In
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
export default Signup;
