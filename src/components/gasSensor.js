import {React,useState} from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
import {Table, Alert} from 'react-bootstrap';
import './App.css';

// function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);
//     var count=0;
  
//     if (show) {
//       return (
//         <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//           <p>
//             Change this and that and try again. Duis mollis, est non commodo
//             luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//             Cras mattis consectetur purus sit amet fermentum.
//           </p>
//         </Alert>
//       );
//     }
//     return <Button onClick={() => setShow(true)}>Show Alert</Button>;
//   }
const GasSensor = ({gasArray})=>{

    const [flagState,setFlag]=useState(false);
    const [count,setCount]=useState(0);
    const [show,setShow]=useState(false);
    const tell = (val)=>{
      // if(gasArray)
      val >350?setShow(true):setShow(false);
  }
    return (<>
    <Navbaru/>
    <div className="tableParent" style={{marginTop:'10%',}}>
    <Table bordered hover className="cardi" size='sm' style={{}}>
    <thead><tr><th>Date</th><th>Day</th><th>Time</th><th>Smoke Concentration (in ppm)</th></tr></thead>
    <tbody>{Object.keys(gasArray).slice(Object.keys(gasArray).length-10,Object.keys(gasArray).length).reverse().map((key1,index)=>(
        <tr>
        {/* {gasArray[key1]>308? setFlag(true): setFlag(false)}
         */}
         {/* {
            gasArray[key1]>308? setCount(count+1) : ''
         } */}
         <td>{(gasArray[key1].split(" ")).slice(0,1)} </td>
         <td>{(gasArray[key1].split(" ")).slice(1,2)} </td>
         <td>{(gasArray[key1].split(" ")).slice(2,3)} </td>
         {/* <td style={{padding:"0.5% 3%"}}><TabElement value={(gasArray[key1].split(" ")).slice(0,2).join(" --- ")} /></td> */}
        <td style={{width:"50%"}}  > <TabElement className={`${(gasArray[key1].split(" ")).slice(-1)[0]>350 ? 'redi' : 'normal' }`} value={(gasArray[key1].split(" ")).slice(-1)[0]}/></td>
         </tr>))}
         </tbody>
     </Table>
     </div>
     
     </>)
}

export default GasSensor;
// className={`${gasArray[key1]>305? 'redi' : 'App' }`}