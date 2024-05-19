import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import MotivationPage from './pages/MotivationPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';
import GeneralAlgebra from './pages/GeneralAlgebra';


import DefApp from './pages/DefApp'
import AppProperties from './pages/AppProperties';
import InjSurj from './pages/InjecSurj';
import AppQuiz from './pages/AppQuiz';
import KernalImg from './pages/KernalImg'
import Morphisme from './pages/Morphisme'




import Login from './pages/Login';
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/chapter1" element={<Chapter1 />} />
      <Route exact path="/chapter2" element={<Chapter2 />} />
      <Route exact path="/chapter3" element={<Chapter3 />} />
      <Route path="/MotivationPage" element={<MotivationPage />} />
      <Route path="/SettingsPage" element={<SettingsPage />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/LogoutPage" element={<LogoutPage />} />
      <Route path="/GeneralAlgebra" element={<GeneralAlgebra />} />

      <Route path="/chapter2/definition" element={<DefApp />} />
      <Route path="/chapter2/properties" element={<AppProperties/>} />
      <Route path="/chapter2/KernalImg" element={<KernalImg/>} />
      <Route path="/chapter2/InjectifSurjectif" element={<InjSurj/>} />
      <Route path="/chapter2/Morphisme" element={<Morphisme/>} />
      <Route path="/chapter2/Quiz" element={<AppQuiz/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Router>

  );
};

export default App;