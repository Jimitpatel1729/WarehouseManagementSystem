import {React, useState} from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
import Navbari from './navBari';
import {Table,Card ,Button ,Alert , Modal} from 'react-bootstrap';
import UserFull from './UserFullscreen';
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
        // console.log(keyo);
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
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
    {/* <Button variant="primary">Go somewhere</Button> */}
    {/* {values.map((v, idx) => ( */}

      {/* ))} */}
      {/* {Object.keys(arr).map((key)=>{ */}
      {/* put modal here */}

      {/* })} */}
       
  </Card.Body>
  
</Card>
 ))
    }
    </div>
</>)
         
}

export default Rfidusers;

{/* <Table striped bordered hover className="cardi rfidTable" size='sm' >
<thead><tr><th>No.</th><th>Name</th><th>RFID readings</th></tr></thead>
<tbody>{Object.keys(arr).slice(1,5).map((key,index)=>(
    <tr><td>{index+1}</td>
    <td>{arr[key]=== "831d72c" ? "Jimit":"Monisha"}</td>
    <td> <TabElement value={arr[key]}/></td>
    </tr>
   
     ))}</tbody>
     </Table> */}




    


//     {
//         for(const indexi=0;indexi<6;indexi=indexi+2){
//             <tr>
//             <td>{indexi+1}</td>
//             <td>{Object.values(arr[key].entries)[indexi].split(" ").slice(0,1)}</td>
//             <td>{Object.values(arr[key].entries)[indexi]}</td>
//        <td>{Object.values(arr[key].entries)[indexi+1]}</td>
//             </tr>
//         }
//    }


// {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
// <Modal.Header closeButton>
//   <Modal.Title>{arr[key].name}</Modal.Title>
// </Modal.Header>
// <Modal.Body> <div>Name: {arr[key].name}</div>
// <div>Tag: {arr[key].tag}</div>
// {/* {Object.keys(arr[key].entries).map((entry,index)=>( */}
//   { (arr[key].hasOwnProperty('entries')) && (<Table striped bordered hover className="cardi rfidTable" size='sm' >
//   {/* <div>Last entry: {((arr[key].entries[key1]).split(" ")).slice(0,2).join(" ")}</div> */}
// <thead><tr><th>No.</th><th>Day</th><th>Entry</th><th>Exit</th></tr></thead>
// <tbody>
// {Object.values(arr[key].entries).slice(1,6).filter((_,i)=>!(i%2)).map((timeStamp,indexi)=>(

// <tr>
// <td>{indexi+1}</td>
// {/* <td>{((arr[key].entries[timeStamp]).split(" ")).slice(0,1)}</td> */}
// <td>{timeStamp.split(" ").slice(0,1)}</td>
// {/* <td>{((arr[key].entries[entry]).split(" ")).slice(1,2)}</td>
// <td>{((arr[key].entries[entry]).split(" ")).slice(1,2)}</td> */}
// <td>{Object.values(arr[key].entries)[indexi]}</td>
// <td>{Object.values(arr[key].entries)[indexi+1]}</td>
// {/* <td> <TabElement value={arr[timeStamp]}/></td> */}
// </tr>

// ))}
//  </tbody>
//  </Table>)}
// {/* ))} */}
// </Modal.Body>
// </Modal> */}





// {  (arr[key].hasOwnProperty("entries") && <Button variant='primary' key={index} value={key} className="me-2" style={{ background:"#F68989",
// border:"#F68989"}} onClick={(e) =>{handleCLick(e);handleShow(true);}}>
//         Details
//         {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
//       </Button>)}

