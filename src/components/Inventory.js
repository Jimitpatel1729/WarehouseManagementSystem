import React, { Component, useEffect ,useState } from 'react'
import Navbaru from './navBar';
import TabElement1 from './tabElement1';
import {Table, Alert} from 'react-bootstrap';
import './App.css';

const Inventory =( ({inventoryArray})=>{
const [show, setShow] =useState(false);
const [count,setCount] = useState(-1);


    return (<>
       <Navbaru/>
       {/* {(inventoryArray['Nirma Soap']<2) && <Alert variant="success" style={{width:"50%",margin:"auto", marginBottom:"5%" }} onClose={() => setShow(false)} dismissible>Yaiyee</Alert>} */}
    <Table bordered hover className="tableParent cardi" style={{width:"50%", marginTop:'10%'}} size='sm' >
    <thead><tr><th>Name</th><th>Weight</th><th>Quantity</th></tr></thead>
    <tbody>{Object.keys(inventoryArray).map((key,index)=>(
        <tr>
        {/* {inventoryArray[key]<2 && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert> } */}
        <td>{key}</td>
        <td>{inventoryArray[key].split(" ").slice(0,1)}</td>
        {/* {setCount(inventoryArray[key])} */}
        <td className={`${(inventoryArray[key].split(" ")).slice(1,2)<3 ? 'redi' : 'normal' }`}>
  
        <TabElement1 value={inventoryArray[key].split(" ").slice(1,2)}/></td>
        {/* <td> <TabElement value={arr[key]}/></td> */}
        </tr>
       
         ))}</tbody>
         </Table>
    </>)
}

)

export default Inventory;
