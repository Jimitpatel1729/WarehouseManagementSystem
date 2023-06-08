import {React,useState} from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
import {Table, Alert} from 'react-bootstrap';
import './App.css';


const GasSensor = ({gasArray})=>{

    const [flagState,setFlag]=useState(false);
    const [count,setCount]=useState(0);
    const [show,setShow]=useState(false);
    const tell = (val)=>{
      val >350?setShow(true):setShow(false);
  }
    return (<>
    <Navbaru/>
    <div className="tableParent" style={{marginTop:'10%',}}>
    <Table bordered hover className="cardi" size='sm' style={{}}>
    <thead><tr><th>Date</th><th>Day</th><th>Time</th><th>Smoke Concentration (in ppm)</th></tr></thead>
    <tbody>{Object.keys(gasArray).slice(Object.keys(gasArray).length-10,Object.keys(gasArray).length).reverse().map((key1,index)=>(
        <tr>
         <td>{(gasArray[key1].split(" ")).slice(0,1)} </td>
         <td>{(gasArray[key1].split(" ")).slice(1,2)} </td>
         <td>{(gasArray[key1].split(" ")).slice(2,3)} </td>
        <td style={{width:"50%"}}  > <TabElement className={`${(gasArray[key1].split(" ")).slice(-1)[0]>350 ? 'redi' : 'normal' }`} value={(gasArray[key1].split(" ")).slice(-1)[0]}/></td>
         </tr>))}
         </tbody>
     </Table>
     </div>
     
     </>)
}

export default GasSensor;
