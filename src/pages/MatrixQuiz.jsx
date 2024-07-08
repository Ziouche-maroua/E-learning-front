import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chap3quiz from '../components/Matrices/Chap3quiz';
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';
const MatrixQuiz = () => {
  const sections = [
    { name: 'Definition', link: '/chapter3/Matdefinition' },
    { name: 'Elementary matrices', link: '/chapter3/Elementary' },
    { name: 'Operations on matrices', link: '/chapter3/operations' },
    { name: 'Matrix inverse', link: '/chapter3/MatrixInverse' },
    { name: 'Take a quiz about matrix', link: '/chapter3/Quiz3' },
  ];
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
    <div className="flex flex-1 pt-16">   
      <SectionMenu chapter="matrices" sections={sections} />
        <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 border border-blue-800 shadow-blue-800 rounded-md mx-4 my-5">
    
      <Chap3quiz/>


      
     
    </div>
    </div>
    <Chatbox />
    </div>
  );
};

export default MatrixQuiz;