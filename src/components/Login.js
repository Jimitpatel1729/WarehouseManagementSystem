import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert ,Nav, Navbar, Container} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./App.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch(error) {
      console.log(error.message);
      setError("Failed to log in");
    }

    setLoading(false)
  }

  return (
    <>
    <Navbar expand="lg" style={{background:'#151D3B' }}>
        <Container style={{padding:"0.8rem"}}>
          <Navbar.Brand href="#home" style={{fontWeight:"600" , color:"#fff" , fontSize:"1.5rem"}}>Warehouse Management System</Navbar.Brand>
        </Container>
      </Navbar>
      <Card className="cardLogin cardi" style={{overflow:"hidden"}}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{color:"#2B2B2B"}}>Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} >
            <Form.Group id="email" style={{padding:"10% 5% 2.5%"}}>
              {/* <Form.Label style={{textAlign:"left !important"}}>Email</Form.Label> */}
              <Form.Control type="email" ref={emailRef} required  placeholder="Email Id"/>
            </Form.Group>
            <Form.Group id="password" style={{padding:"5% 5% 7%"}} >
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" ref={passwordRef} required placeholder="Password"/>
            </Form.Group>
            <Button disabled={loading} className="w-50 mt-3" type="submit" style={{background:"#F68989", border:"#F68989"}}>
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3" style={{margin:"0.5rem 0"}}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </>
  )
}
