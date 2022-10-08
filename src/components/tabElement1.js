import React, { useState, useEffect } from 'react';
import './App.css';
import {Alert} from 'react-bootstrap';

const TabElement1 =({value, className})=>{
    const [show, setShow] =useState(false);

const handleCount=()=>{
  // if(inventoryArray['Nirma Soap']<2){
    
    // console.log(inventoryArray['Nirma Soap']);
    
value<3 ? setShow(true):setShow(false);
    // console.log("hii");
    
  // }
    
}
useEffect(()=>{handleCount()},[value]);

    return (<div className={className} style={{display:'flex',flexDirection:'row'}} >
    <div style={{width:'30%'}}>{value}</div>
   {  show &&  <Alert  className='alertu' dismissible onClose={()=>setShow(false)} >
  <p>Refill!</p>
  {/* <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p> */}
</Alert>}

    
    </div>)
}

export default TabElement1;