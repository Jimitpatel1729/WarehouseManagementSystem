import {React,useState} from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
import {Table, Alert,Button, Form} from 'react-bootstrap';
// import {getDatabase,ref, child,get,push, onValue} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import {initializeApp} from "firebase/app"
import {getDatabase,ref,set,push, child,get, onValue} from "firebase/database";
import { Link, useHistory } from "react-router-dom";
import './App.css';

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

const AddUsers=({Users}) => {

//   const [userName, setUserName] =useState({
//     Fullname:"",
//     tag:"",
//   });
//   // const [userTag, setUserTag] =useState("");
// let name ,value;
// const postUserData =(event)=>{
// name=event.target.name;
// value=event.target.value;
// setUserName({...userName,[name]:value})
// };
    // reference().ref("Rfid User1").set({name:"moni",designation:"cutest girlfriend"});
    const [name , setName] = useState();
    const [age , setAge] = useState();
    const [suc,setSuc]=useState("");
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(false);
    const db =getDatabase();
    const history = useHistory();
    // const refi=db.ref('Users');
    const handleSubmit=(e)=>{
      e.preventDefault();
      setLoading(true);
      const no=Object.keys(Users).length;
      set(ref(db, '/NumberOfUsers'),{NumberOfUsers:(no+1)});
      set(ref(db, 'Users/Rfid User'+ (no+1) ),{name:name,tag:age});
      
      setSuc("Success");
      console.log(Users);
      history.push("/addusers");
      setLoading(false);
      setShow(true);
      setName("");
      setAge("");
      setSuc("")
    }
  
    // push(ref(db, 'Rfid Users'), {
    //     username:"moni",
    //     designation:"cutest girlfriend",
        
    //   });
    // db.ref("Rfid Users").remove()
    // reference().ref("Rfid User1").set({name:"moni",designation:"cutest girlfriend"});
        // console.log(dbRef);
    // Push Function
    // const Push = () => {
    //   database.ref("user").set({
    //     name : name,
    //     age : age,
    //   }).catch(alert);
    // }
    
    return (<>
      <Navbaru/>
      <div style={{marginTop : "13%", height:'50vh'}}>
     
      <Form onSubmit={handleSubmit}  >

      {(show) && <Alert variant="success" style={{width:"50%",margin:"auto", marginBottom:"5%" }} onClose={() => setShow(false)} dismissible>User Added Successfully</Alert>}
      <center className="cardLogin cardi" style={{padding:'2.5%'}} >
        <div style={{fontWeight:"400", fontSize:"1.8rem", marginBottom:"2%"}}>Add User</div>
        <Form.Group style={{padding:"10% 5% 2.5%"}}>
        <Form.Control placeholder="Enter your name" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        
        {/* <input placeholder="Enter your tag" value={age} 
        onChange={(e) => setAge(e.target.value)}/> */}
        <Form.Group style={{padding:"5% 5% 7%"}}> <Form.Control placeholder="Enter your tag" value={age} 
        onChange={(e) => setAge(e.target.value)}/></Form.Group>
       
        {/* <button onClick={handleSubmit}>PUSH</button> */}
        <Button className="w-50 mt-3" disabled={loading} type="submit" style={{background:"#F68989",border:"#F68989", marginBottom:'2%'}}>Submit</Button>
        </center>
      </Form>
        
      </div>
      </>
    );
  }

  export default AddUsers;

  // const UserRef=ref.child('Users/Rfid User3');
      // const no=Object.keys(Users).length;
      // refi.push({name:name,age:age});
      // db.ref('Users/Rfid User3').set({name:name,age:age});


        // push(ref(db, 'Users/Rfid User3/'),{
      //   name:name,
      //   age:age,
      // });

    