
import Chatbox from '../components/ChatBox';
import React from 'react';
import SousE from '../components/VectorSpace/Sous';
import TopBar from '../components/TopBar';
import SectionMenu from '../components/SectionMenu';
const SE = () => {
  const sections = [
    { name: 'Definition', link: '/chapter1/definition' },
    { name: 'Subspace', link: '/chapter1/Subspace' },
    { name: 'Linearly Independent Family', link: '/chapter1/Lesfamilles' },
    { name: 'Generating Family', link: '/chapter1/FamilleG' },
    { name: 'Base and dimension', link: '/chapter1/BaseDim' },
    { name: 'Take a quiz about vector space', link: '/chapter1/VSQuiz' },
  ];
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
    <div className="flex flex-1 pt-16">   
      <SectionMenu chapter="vectors" sections={sections} />
        <div className="w-full lg:w-2/3 lg:ml-[37%] p-4 border border-blue-800 shadow-blue-800 rounded-md mx-4 my-5">
      
      <SousE/>
    </div>
    </div>
    <Chatbox />
    </div>
  );
};
export default SE;