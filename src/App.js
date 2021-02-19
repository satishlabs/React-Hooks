
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCourse from './MyCourse';

const App = (props) => {
  const [myState, setMyState] = useState({
    trainerName: "Satish Prasad",
    trainerEmail: "satish@gmail.com"
  });

  useEffect(()=>{
    console.log("[App] -1st  useEffect()");
    //Do Initilization
    //Http calls
    return () =>{
      //Cleanup
      console.log("[App] - 1st Cleanup - useEffect()"); 
    }
  });

  useEffect(()=>{
    console.log("[App] -2nd useEffect()");
    //Do Initilization
    //Http calls
    return () =>{
      //Cleanup
      console.log("[App] -2nd Cleanup - useEffect()"); 
    }
  });

  useEffect(()=>{
    console.log("[App] -3rd useEffect()");
    //Do Initilization
    //Http calls
    return () =>{
      //Cleanup
      console.log("[App] -3rd Cleanup - useEffect()"); 
    }
  },
  [myState.trainerName,myState.trainerEmail]);
  
  return (
    <div>
      <div className="container">
        <h1 className="text-center"> Welcome to CourseCube !!! </h1>
        <br />
        <MyCourse />
      </div>
    </div>
  );

};

export default App;
