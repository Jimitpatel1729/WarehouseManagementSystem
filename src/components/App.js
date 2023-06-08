import './App.css';
import TabElement from './tabElement';
// import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { initializeApp } from 'firebase/app';
import {getDatabase,ref, child,get, onValue} from "firebase/database";
// import {getDatabase,ref, child,get, onValue} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container } from 'react-bootstrap';
import GasSensor from './gasSensor';
import RfidSensor from './RfidSensor';
import RFIDusers from './RFIDusers';
import Inventory from './Inventory';
import Home from './home';
import AddUsers from './AddUser';
import {Switch , Route ,BrowserRouter as Router } from 'react-router-dom';
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Dashboard from './Dashboard';


const config={
  apiKey: "AIzaSyAn7civSw_Fg2HOFwwHl6f4AG8pQ0cHwxk",
  authDomain: "warehouse-management-sys-9a34b.firebaseapp.com",
  databaseURL: "https://warehouse-management-sys-9a34b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "warehouse-management-sys-9a34b",
  storageBucket: "warehouse-management-sys-9a34b.appspot.com",
  messagingSenderId: "616576331200",
  appId: "1:616576331200:web:1a7922251921a35bf06c25"
};

const app = initializeApp(config);



function App() {
  var show;
  const [arr, setArray]=useState([]); 
  const [gasArray,setGasArray] =useState([]); 
  const [inventoryArray,setInventoryArray] =useState([]); 
  const gasArrayfunc = (dataGas)=> {
    setGasArray(dataGas);
    return gasArray;
  }
  useEffect(() => {
    const dbRef = ref(getDatabase());
    const listener =onValue(dbRef, (snapshot) => {
      const data = snapshot.child('Users').val();
      const dataGas= snapshot.child('MQ2Sensor').val()
      const dataInventory=snapshot.child('Inventory').val()
      setArray(data);
     gasArrayfunc(dataGas);
     setInventoryArray(dataInventory);
    })
  
  
     return ()=> dbRef.off(listener);
  }, []);

 
   console.log(arr);
   console.log(gasArray);
   console.log(Object.keys(inventoryArray));
  

  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <Switch>
<PrivateRoute path='/rfid' component={RFIDusers} arr={arr} /> 
<PrivateRoute exact path='/gas' component={GasSensor} gasArray={gasArray} />
<PrivateRoute exact path='/inventory' component={Inventory} inventoryArray={inventoryArray} />
<PrivateRoute exact path='/' component={Home}/>
<Route path="/signup" component={Signup} />
<Route path="/login" component={Login} />
<Route path="/forgot-password" component={ForgotPassword}/>

<PrivateRoute path='/addusers' component={AddUsers} Users={arr}/>


    </Switch>
    </AuthProvider>
</Router>

  </div>
  );
}

export default App;



