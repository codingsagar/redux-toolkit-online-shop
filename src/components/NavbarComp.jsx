import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";


function NavbarComp() {
  const cartValue = useSelector((state)=>state.cart.cart);

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#">E-Shopping</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" style={{textDecoration:"none",color:"white",marginRight:10}}>Home</Link>
          <Link to="/cart" style={{textDecoration:"none",color:"white",marginRight:15}}>Cart <Badge bg="primary">{cartValue.length}</Badge></Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
