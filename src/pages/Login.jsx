import React, { useState } from 'react';
import logImage from '../assets/images/log-image.jpg';
import emailIcon from '../assets/images/email.png';
import eyeIcon from '../assets/images/eye-icon.png';
import googleIcon from '../assets/images/google.png';
import microsoftIcon from '../assets/images/microsoft.png';
import { axiosPost } from './services/axiosUtils';


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

  const submitForm = async (action) => {

    const userData = {
      email: email,
      password: password,
    };
  
    try {
      if (action === 'signup') {
        const response = await axiosPost('/student/register', userData);
        console.log('Response from backend:', response.data);
        console.log('Signup successful');
        // Gérer la réponse du backend et d'autres actions nécessaires après l'inscription réussie
      } else if (action === 'login') {
        const response = await axiosPost('/student/login', userData);
        console.log('Response from backend:', response.data);
        console.log('Login successful');
        // Gérer la réponse du backend et d'autres actions nécessaires après la connexion réussie
      }
    } catch (error) {
      console.error('Error:', error);
      // Gérer les erreurs (par exemple, afficher un message d'erreur à l'utilisateur)
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
        <div className="md:w-1/3 flex justify-center items-center  p-4">
          <img src={logImage} alt="LogImage" className="w-full max-h-96 object-contain rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-2">Welcome to</h2>
            <h3 className="text-4xl font-bold text-[#67adee]">LearnVisual</h3>
          </div>
          <p className="text-lg font-light mb-6">Create your account and unlock a world of knowledge at your fingertips</p>
          <div className="space-y-4">
            <div className="relative w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
              />
              <img src={emailIcon} alt="Email" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
            </div>
            <div className="relative w-full">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
              />
              
            </div>
            <div className="relative w-full">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showPasswordTwo ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
              />
              
            </div>
            <div className="relative w-full">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                className="pl-10 pr-4 py-2 w-full bg-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#67adee]"
              />
            </div>
          </div>
          <div className="flex space-x-20 mt-6 ">
            <button
              onClick={() => submitForm('signup')}
              className="w-[113px] h-[40px] bg-[#5fa1f0] rounded-[10px] text-white font-bold shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Sign up
            </button>
            <button
              onClick={() => submitForm('login')}
              className="w-[113px] h-[40px] bg-[#79bffb] rounded-md text-white font-bold shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
          <span className="block text-lg font-extralight text-[#000] mt-6">Or you can join with</span>
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
              <img src={microsoftIcon} alt="Microsoft" className="w-6 h-6 mr-2" />
              Sign up with
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
