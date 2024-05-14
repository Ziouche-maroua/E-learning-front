/* Login.jsx */

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file here

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowPasswordTwo(!showPasswordTwo);
  };

  const submitForm = (action) => {
    const userData = {
      email: email,
      password: password,
    };

    if (action === 'signup') {
      console.log("Signup with success");
      // Handle signup logic here
    } else if (action === 'login') {
      console.log("Login with success");
      // Handle login logic here
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
    <div className="main-container bg-[#e5f5fa] w-[1218px] h-[805px] relative overflow-hidden mx-auto my-0 ">

        <div className="relative">
            <div className="absolute w-[400px] mx-auto mt-40 ml-20">
            <img src="../assets/images/log-image.jpg" alt="LogImage" className="w-full h-auto rounded-[150px]" />
            </div>
        </div>

      <div className="w-[563px] h-[619px] absolute top-[38px] left-[718px] z-[26]">
        <div className="flex w-[563px] flex-col gap-[34px] items-start flex-nowrap relative mt-0 mr-0 mb-0 ml-0">
          <div className="flex w-[312px] flex-col items-start shrink-0 flex-nowrap relative z-[1]">
            <span className="flex w-[311px] h-[39px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[36px] font-medium leading-[39px] relative text-left whitespace-nowrap z-[2]">Welcome to</span>
            <span className="flex w-[312px] h-[42px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[40px] font-bold leading-[42px] text-[#67adee] relative text-left whitespace-nowrap z-[3]">LearnVisual</span>
          </div>
          <span className="flex w-[523px] h-[48px] justify-start items-start shrink-0 font-['Inter'] text-[20px] font-extralight leading-[24.205px] text-[#000] relative text-left z-[4]">Create your account and unlock a world of knowledge<br />at your fingertips</span>
        </div>
        <div className="flex w-[307px] flex-col items-start flex-nowrap relative z-[5] mt-[34px] mr-0 mb-0 ml-0">
          <div className="input-container">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input-field bg-custom-blue" />
            <img src="../assets/images/email.png" alt="Email" className="inputs-icon" />
          </div>
          <div className="input-container">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" className="input-field bg-custom-blue" />
            {/* <img src="../assets/images/eye-icon.png" alt="Eye icon" className="inputs-icon" onClick={togglePasswordVisibility} /> */}
          </div>
          <div className="input-container">
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showPasswordTwo ? 'text' : 'password'} placeholder="Confirm Password" className="input-field bg-custom-blue" />
            {/* <img src="../assets/images/eye-icon.png" alt="Eye icon" className="inputs-icon" onClick={togglePasswordVisibilityTwo} /> */}
          </div>
          <div className="input-container">
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="Phone Number" className="input-field bg-custom-blue" />
          </div>
        </div>
        <div className="flex w-[263px] gap-[37px] items-start flex-nowrap relative z-[19] mt-[34px] mr-0 mb-0 ml-0">
          <button onClick={() => submitForm('signup')} className="w-[113px] h-[40px] shrink-0 bg-[#5fa1f0] rounded-[10px] border-none relative z-20 pointer font-bold text-white shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">Sign up</button>
          <button onClick={() => submitForm('login')} className="w-[113px] h-[40px] shrink-0 bg-[#79bffb] border-none relative z-[21] pointer font-bold text-white rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">Log in</button>
        </div>
        <span className="block h-[27px] font-['Inter'] text-[16px] font-extralight leading-[19.364px] text-[#000] relative text-left whitespace-nowrap z-[24] mt-[24px] mr-0 mb-0 ml-[14px]">Or you can join with</span>
        <div className="flex w-[376px] gap-[34px] items-start flex-nowrap relative z-[26] mt-[16px] mr-0 mb-0 ml-0">
          <button onClick={handleGoogleSignUp} className="w-[160px] h-[45px] shrink-0 border-none relative z-[27] bg-[#79bffb] pointer text-white font-semibold rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">
            <img src="../assets/images/google.png" alt="Google" className="inputs-icon" />
            Sign up with
          </button>
          <button onClick={handleMicrosoftSignUp} className="w-[160px] h-[45px] shrink-0 border-none relative z-[27] bg-[#79bffb] pointer text-white font-semibold rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white">
            <img src="../assets/images/microsoft.png" alt="Microsoft" className="inputs-icon" />
            Sign up with
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
