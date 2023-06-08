import {React, useState} from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
import {Table,Card ,Button ,Alert , Modal} from 'react-bootstrap';
import './App.css';


const Rfidusers = ({arr})=>{
    const values = [true];
    console.log(arr);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false); 
    const [keyo,setKey]=useState();

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }

      const handleCLick =(e)=>{
          setKey(e.target.value);
console.log(e.target.value);
console.log("changedkey",keyo);
      }
    return (<>
    <Navbaru/>
    <div style={{marginTop:'7%',display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'space-around', marginBottom:'2rem'}}>
    { 
        Object.keys(arr).map((key,index)=>(
<Card style={{ display:'flex',flexDirection:'column', minWidth: '70%' ,margin:'5px 5px',paddingTop:'1%' }} className='cardi'>
  <Card.Body>
    <Card.Title style={{fontWeight:'600', fontSize:'1.4rem'}}>{key}</Card.Title>
    <Card.Text style={{textAlign:'left', fontSize:'1.2rem', lineHeight:'2'}}>
    <div style={{paddingLeft:'3%'}}>
      <div>Name: {arr[key].name}</div>
      <div>Tag: {arr[key].tag}</div>
      {arr[key].hasOwnProperty("entries") ? (arr[key].hasOwnProperty("entries")  && 
      (Object.keys(arr[key].entries['3-2022']).slice(0,1).map((entry,index)=>(
          <div>Last entry: {(Object.values(arr[key].entries['3-2022']).slice(-1))}</div>
      ))
      )
      
      ) : <div>No entries found</div>}
     {arr[key].hasOwnProperty("entries") && ( 
       <>
       <div>Number Of Days Present In March: {Math.floor((Object.values(arr[key].entries['3-2022']).length/2))}</div>
       <div>Number Of Days Absent In March: {23-Math.floor((Object.values(arr[key].entries['3-2022']).length/2))}</div>
     </>
     )} 
     
      </div>

      { (arr[key].hasOwnProperty('entries')) && (<Table bordered hover className="cardi rfidTable" size='sm' >
<thead><tr><th>No.</th><th>Date</th><th>Day</th><th>Entry</th><th>Exit</th></tr></thead>
<tbody>
{Object.values(arr[key].entries['3-2022']).slice(Object.values(arr[key].entries['3-2022']).length-10+1,Object.values(arr[key].entries['3-2022']).length).map((timeStamp,indexi)=>(
  <tr>  
  { indexi%2===0 && 
(
 <> <td>{indexi/2+1}</td>
<td>{timeStamp.split(" ").slice(0,1)}</td>
<td>{timeStamp.split(" ").slice(1,2)}</td>
<td>{(Object.values(arr[key].entries['3-2022'])[Object.values(arr[key].entries['3-2022']).indexOf(timeStamp)-1]).split(" ").slice(-1)}</td>
<td>{(Object.values(arr[key].entries['3-2022'])[Object.values(arr[key].entries['3-2022']).indexOf(timeStamp)]).split(" ").slice(-1)}</td>
</> ) }</tr>)
)}
 </tbody>
 </Table>)}
      
    </Card.Text>
  </Card.Body>
  
</Card>
 ))
    }
    </div>
</>)
         
}

export default Rfidusers;






