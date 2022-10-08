import {React, useState} from "react";
import { Container, Nav ,NavDropdown, Navbar , Button} from "react-bootstrap";
import {Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

const Navbaru= ()=>{

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
    return (
      <div >
        <Navbar fixed='top' expand="lg"  style={{background: '#151D3B'}} >
        <Container style={{padding:"0.8rem"}}>
          <Navbar.Brand href="/" style={{ fontWeight:"600", fontSize:"1.5rem" ,color:'#FFF'}}>Warehouse Management System</Navbar.Brand>
          {/* <Navbar.Brand href="/" style={{ fontWeight:"600", fontSize:"1.5rem" ,color:'#FD5F00'}}>Warehouse Management System</Navbar.Brand> */}
          {/* <Link to='/gas' style={{textDecoration:"None" ,color:"#3A3845" }}>Smoke Detection</Link> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ms-auto linki" >
            <Nav.Link><Link to='/rfid' className="linki"  style={{textDecoration:"None"  }}>RFID Attendance</Link></Nav.Link>
              <Nav.Link><Link to='/gas' className="linki"  style={{textDecoration:"None" }}>Smoke Detection</Link></Nav.Link>
           
              <Nav.Link><Link to='/inventory'  className="linki" style={{textDecoration:"None"  }}>Inventory</Link></Nav.Link>
              <Nav.Link><Link to='/addusers'  className="linki" style={{textDecoration:"None"  }}>Add Users</Link></Nav.Link>
            </Nav>
            <Button variant="link" onClick={handleLogout} style={{textDecoration:"none", color:"#C02739", fontWeight:"bold"}}>
          Log Out
        </Button>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>
      </div>
    );
}
export default Navbaru;


// link color color:"#3A3845"

// style={{color:"#F6F6E9"}}