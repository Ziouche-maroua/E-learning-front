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
import Signup from './pages/Signup';





import DefVS from './pages/DefVS';
import Lesfamilles from './pages/Lesfamilles';
import Base from './pages/BaseDim';
import VSQuiz from './pages/VSQuiz';
import Subspace from './pages/Subspace';
import FamilleG from './pages/FamilleG';



import Matrixdef from './pages/Matrixdef';
import Elementary from './pages/Elementary';
import MatrixQuiz from './pages/MatrixQuiz';
import MatrixInverse from './pages/MatInverse';
import Matrixoperation from './pages/Matrixoperation'


import DefApp from './pages/DefApp'
import AppProperties from './pages/AppProperties';
import InjSurj from './pages/InjecSurj';
import AppQuiz from './pages/AppQuiz';
import KernalImg from './pages/KernalImg'
import Morphisme from './pages/Morphisme'




import Login from './pages/Login';




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

    <Route path="/chapter3/Matdefinition" element={<Matrixdef />} />
    <Route path="/chapter3/Elementary" element={<Elementary/>} />
    <Route path="/chapter3/MatrixInverse" element={<MatrixInverse/>} />
    <Route path="/chapter3/operations" element={<Matrixoperation/>} />
    <Route path="/chapter3/Quiz3" element={<MatrixQuiz/>} />

    <Route path="/chapter1/definition" element={<DefVS />} />
    <Route path="/chapter1/Subspace" element={<Subspace/>} />
    <Route path="/chapter1/Lesfamilles" element={<Lesfamilles/>} />
    <Route path="/chapter1/FamilleG" element={<FamilleG/>} />
    <Route path="/chapter1/BaseDim" element={<Base/>} />
    <Route path="/chapter1/VSQuiz" element={<VSQuiz/>} />
    <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />



    </Routes>
  </Router>

  )
};

export default App;