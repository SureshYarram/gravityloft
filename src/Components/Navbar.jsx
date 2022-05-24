import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar , Nav , Container} from "react-bootstrap"
import Logo from "../Images/Logo.png"


export const NavbarIs = ()=>{


    return(

<>

  <Navbar id="navbar">
    <Container>
    <Navbar.Brand href="#home"><img id="icon" src={Logo} alt="" /></Navbar.Brand>
    <Nav className="me-auto" id="navleft">
      <Nav.Link id="contact" href="#">Contactus</Nav.Link>
      <Nav.Link id="login" href="#">Login</Nav.Link>
      <Nav.Link id="register" href="#">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>




    )
}