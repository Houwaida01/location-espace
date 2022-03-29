import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/Admin";

function Navigation() {
  const dispatch=useDispatch()
  const {adminReducer:{isAuthad},userReducer:{isAuth}}=useSelector((state)=>state)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Location Espaces</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Link>
            <Link to={"/annonce"}>
              <Nav.Link href="/annonce">Annonce</Nav.Link>
            </Link>
            <Link to={"/myannonce"}>
              <Nav.Link href="/muannonce">My-Annonce</Nav.Link>
            </Link>
            <Link to={"/contact"}>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Link>
          </Nav>
          {isAuthad || isAuth ? (<Link to={"/"} onClick={()=>dispatch(logout())}>
            <a href="#">Logout</a>
          </Link>):(
            <Nav>
            <Link to={"/user/signup"}>
              <Nav.Link href="/user/signup">S'inscrire User</Nav.Link>
            </Link>
            <Link to={"/user/signin"}>
              <Nav.Link eventKey={2} href="/user/signin">
                S'authentifier User
              </Nav.Link>
            </Link>
            {/* <Link to={"/admin/signin"}>
              <Nav.Link eventKey={3} href="/admin/signin">
                S'authentifier Admin
              </Nav.Link>
            </Link> */}
          </Nav>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
