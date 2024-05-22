
import TopBar from '../components/TopBar'; 




import DefApp from './DefApp'; 
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Chapter2 = () => {
  const navigate = useNavigate();
useEffect(()=>{
  if(!localStorage.getItem("student")){
    navigate("/login")
  }
});
  
  return (
    <div className="h-screen flex flex-col">
      <TopBar />

     
        <DefApp/>

    </div>
  );
};

export default Chapter2;
