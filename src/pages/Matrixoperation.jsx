
import React from 'react';
import MultMat from '../components/Matrices/MultMat2';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MatrixAddition from '../components/Matrices/ADDmat'
import Chatbox from '../components/ChatBox';
import SectionMenu from '../components/SectionMenu';
const Matrixoperation = () => {
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
      <SectionMenu chapter="matrices" sections={sections} />
      <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 lg:my-5 lg:border lg:border-blue-800 lg:shadow-blue-800 rounded-md ">
   
      

      <MultMat/>

      <MatrixAddition/>
      
     
    </div>
    </div>
    <Chatbox />
    </div>
  );
};

export default Matrixoperation;
