import React from 'react';
import TabElement from './tabElement';
import Navbaru from './navBar';
// import Navbari from './navBari';
import {Table} from 'react-bootstrap';
import './App.css';

const RfidSensor = ({arr})=>{
    return (<>
    <Navbaru/>
    <Table striped bordered hover className="cardi rfidTable" size='sm' >
    <thead><tr><th>No.</th><th>Name</th><th>RFID readings</th></tr></thead>
    <tbody>{Object.keys(arr).slice(1,5).map((key,index)=>(
        <tr><td>{index+1}</td>
        <td>{arr[key]=== "831d72c" ? "Jimit":"Monisha"}</td>
        <td> <TabElement value={arr[key]}/></td>
        </tr>
       
         ))}</tbody>
         </Table></>)
}

export default RfidSensor;



// function AlertDismissibleExample() {
//     const [show, setShow] = useState(true);
  
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
  
//   render(<AlertDismissibleExample />);