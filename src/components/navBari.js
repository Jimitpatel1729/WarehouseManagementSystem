import {React, useState} from "react";
import { Container, Nav ,NavDropdown, Navbar , Button} from "react-bootstrap";
import {Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"

const Navbari= ()=>{

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
      <div style={{marginTop:'0',position:'absolute', width:'180px', height:'100%',background:'#051367'}}>
       
      </div>
    );
}
export default Navbari;