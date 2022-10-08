import './App.css'
import TabElement from './tabElement';
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {getDatabase,ref, child,get, onValue} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container } from 'react-bootstrap';
import GasSensor from './gasSensor';
import RfidSensor from './RfidSensor';
import Home from './home';
import AddUsers from './AddUser';
import {Switch , Route ,BrowserRouter as Router } from 'react-router-dom';
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

// const app=initializeApp({
//   apiKey: "AIzaSyDbpOMH-JNM5QUzy2xkwOMkgq_vOHa6iWI",
//   authDomain: "warehouse-d9de2.firebaseapp.com",
//   databaseURL: "https://warehouse-d9de2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "warehouse-d9de2",
//   storageBucket: "warehouse-d9de2.appspot.com",
//   messagingSenderId: "121694171861",
//   appId: "1:121694171861:web:efcf53f642fb9bf4de285c"
// });

const app=initializeApp({
  apiKey: "AIzaSyAn7civSw_Fg2HOFwwHl6f4AG8pQ0cHwxk",
  authDomain: "warehouse-management-sys-9a34b.firebaseapp.com",
  databaseURL: "https://warehouse-management-sys-9a34b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "warehouse-management-sys-9a34b",
  storageBucket: "warehouse-management-sys-9a34b.appspot.com",
  messagingSenderId: "616576331200",
  appId: "1:616576331200:web:1a7922251921a35bf06c25"
});


// function load() {
//   var number = show;
  
// }; 

function App() {
  var show;
  const [arr, setArray]=useState([]); 
  const [gasArray,setGasArray] =useState([]); 
  const [userArray,setUserArray] =useState([]); 
  const gasArrayfunc = (dataGas)=> {
    setGasArray(dataGas);
    return gasArray;
  }
  useEffect(() => {
    const dbRef = ref(getDatabase());
    const listener =onValue(dbRef, (snapshot) => {
      const data = snapshot.child('RFID Readings').val();
      const dataGas= snapshot.child('MQ2SensorValue').val()
      setArray(data);
     gasArrayfunc(dataGas);
    })
    // onValue(child(dbRef, 'MQ2SensorValue'),(snapshot) => {
    //   const dataGas = snapshot.val();
    //   setGasArray(dataGas);
    // });
  
  
     return ()=> dbRef.off(listener);
  }, []);
  // var firebaseFunc = ()=>{
   
   console.log(arr);
   console.log(gasArray);

  // Object.keys(arr).map((key)=>(
  //   // <tabElement key={key} value={arr[key]}/>\
  //   <div className="div">bru</div>
  // ))
  
 
    // console.log(arr);
    function load() {
      var number = show;
      
    }; 
  

  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <Switch>
    {/* <Route path='/nav' element={<Navbaru/>}/> */}
    
{/* <Button></Button> */}
{/* {1 && (Object.keys(arr).slice(1,5).map((key)=>(
  <TabElement value={arr[key]}/>
   )) )
} */}
<PrivateRoute path='/rfid' element={<RfidSensor arr={arr}/>}/>
<PrivateRoute path='/gas' element={<GasSensor gasArray={gasArray}/>}/>
<PrivateRoute path='/' element={<Home/>}/>
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/forgot-password" element={<ForgotPasswor/>}/>

{/* <Route path='/addusers' element={<AddUsers reference={getDatabase}/>}/> */}


{/* <RfidSensor arr={arr}/> */}
{/* <GasSensor gasArray={gasArray}/> */}
 ---------------------------
{/* { false && (Object.keys(gasArray).slice(1,5).map((key1)=>(
  <TabElement value={gasArray[key1]}/>
   )))
} */}



    </Switch>
    </AuthProvider>
</Router>

  </div>
  );
}

export default App;
