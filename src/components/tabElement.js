import React, { useState, useEffect } from 'react';
import './App.css';
import {Alert} from 'react-bootstrap';
const TabElement =({value, className})=>{
    const [cnt,setCnt]=useState(0);
    useEffect(()=>{
        tell();
    },[value]);
    const [show,setShow] =useState(false);
    const tell = ()=>{
        value >180?setShow(true):setShow(false);
        if(value>180){
            console.log("dam");
            setCnt(cnt+1);
            console.log(cnt);
        }
        if(cnt>5){
            console.log("greater than 5");
        }
    }
    return <div className={className} onChange={tell} style={{display:'flex',flexDirection:'row'}} >
 
<div style={{width:'30%'}}>{value}</div>
{  show &&  <Alert className='alertu' variant="danger" onClose={()=>setShow(false)} >
  {/* <Alert.Heading>Fire!!</Alert.Heading> */}
<p>Fire!!</p>
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
    
    </div>
}
export default TabElement;