import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/navImage.png";
import Nrm_photo_icon_dummy from "../../assets/Nrm_photo_icon_dummy.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./navbar.css";
import { NavDropdown, Image } from "react-bootstrap";
// import "./App.css";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="navbar_image ">
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-center align-items-center"
          >
            {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
             ></Nav> */}
            <Form className="d-flex justify-content-center align-items-center">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <div className="Checkout-button">
                <Button variant="dark">
                  <FaShoppingCart />
                  Checkout(200)
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
          <div>
            <div className="d-flex">
              <Image
                className="thumbnail-image "
                src={Nrm_photo_icon_dummy}
                alt=""
              />
              <NavDropdown title="User Admin" id="basic-nav-dropdown">
                {/* <NavDropdown.Item> */}

                {/* </NavDropdown.Item> */}

                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
