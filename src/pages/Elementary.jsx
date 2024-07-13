import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MatrixTranspose from '../components/Matrices/TransposeMat.jsx'
import ElemMat from '../components/Matrices/ElemMat.jsx';
import SectionMenu from '../components/SectionMenu';
import Chatbox from '../components/ChatBox.jsx';

const Elementary = () => {
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
    <div className="flex flex-1 pt-16  overflow-x-hidden"> {/* Added overflow-x-hidden to avoid horizontal scrolling */}  
      <SectionMenu chapter="Matrices" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
   
    <h1 className="text-2xl font-bold  my-4  ">
            In this section, we will delve into the fascinating world of Elementary Matrices
          </h1>
      <ElemMat/>
      <MatrixTranspose/>
      
     
    </div>
    </div>
    <Chatbox />
    </div>
  );
};

export default Elementary;