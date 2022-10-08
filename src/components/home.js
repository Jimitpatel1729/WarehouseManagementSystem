import {React, useState} from 'react';
import Navbaru from './navBar';
import Navbari from './navBari';
import Lottie from 'react-lottie';
import {Navbar, Container, Button} from 'react-bootstrap';
import factoryanime from '../Lotties/factoryanime.json'
import { useAuth } from "../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"

const Home = () => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:factoryanime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    return(
        <>

        {/* <Navbaru/> */}
        <Navbar expand="lg" style={{background: '#151D3B'}}>
        <Container style={{padding:"0.8rem"}}>
          <Navbar.Brand href="#home" style={{fontWeight:"600" , color:'#fff' , fontSize:"1.5rem"}}>Warehouse Management System</Navbar.Brand>
          <Button variant="link" onClick={handleLogout} style={{textDecoration:"none", color:"#C02739", fontWeight:"bold"}}>
          Log Out
        </Button>
        </Container>
      </Navbar>
      <div style={{display:"flex",flexDirection:"row",marginTop:'12%', marginLeft:'10%'}}>
      <div style={{paddingRight:"20%"}}><Lottie options={defaultOptions} height={311} width={400} /></div>
        <div className="homebuttons" style={{width:"40%",display:"flex",flexDirection:"column", alignItems:"space-between", marginTop:"-7%"}}>
          <div className='cardi' style={{marginTop:"5%", padding:"4%", color:'red'}} ><Link to='/rfid' className='linki' style={{textDecoration:"None" , fontSize:'1.4rem' }}>RFID Attendance</Link></div>
          <div className='cardi' style={{marginTop:"5%", padding:"4%", color:'red'}} ><Link to='/gas' className='linki' style={{textDecoration:"None" , fontSize:'1.4rem'}}>Smoke Detection</Link></div>
          <div className='cardi' style={{marginTop:"5%", padding:"4%", color:'red'}} ><Link to='/inventory' className='linki' style={{textDecoration:"None", fontSize:'1.4rem' }}>Inventory</Link></div>
          <div className='cardi' style={{marginTop:"5%", padding:"4%", color:'red'}} ><Link to='/addusers' className='linki' style={{textDecoration:"None" , fontSize:'1.4rem' }}>Add Users</Link></div>
        </div> 
      </div>
          
        </>
    )
}

export default Home;

// display:"relative",marginTop:"-56%",

// lottie style style={{position:"relative",marginLeft:"-15%",marginTop:"15%"}}