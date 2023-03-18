import React, { useState } from "react";
import "./about.css";
import logo from "../../assets/navImage.png";
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdModeEditOutline } from "react-icons/md";
import Offcanvas from "react-bootstrap/Offcanvas";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabsInside from "./TabsInside";

function About({ name, ...props }) {
  //   right sidebar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [key, setKey] = useState("home");

  return (
    <div className="about_container">
      <div className="about_us_text">About Us</div>

      {/* logo */}
      <div className="about_logo_text">
        <div className="aboutus_logo_icon">
          <img src={logo} alt="" />
        </div>
        A.T Inks
        <br />
        Digital Inks
        <div className="d-flex ml-2 justify-content-around">
          <div className="about_logo">
            <VscVerifiedFilled size={32} color="silver" />
          </div>
          <div className="about_verify">Verify Company</div>
        </div>
      </div>
      {/* logo */}
      {/* lorem ipsum test start */}
      <p className="about_lorem_text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever,
        &nbsp;
        <MdModeEditOutline
          onClick={handleShow}
          className="about_edit_icon"
          size={25}
          color="red"
        />
        {/* right sidebar start */}
        <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
        {/* right sidebar end */}
        <br />
        the industry's standard dummy text ever
      </p>
      {/* lorem ipsum test end */}

      {/* About tabs start */}

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Info">
          <TabsInside />
        </Tab>
        <Tab eventKey="profile" title="Faq">
          <TabsInside />
        </Tab>
        <Tab eventKey="complaint" title="Complaints and feedback">
          <TabsInside />
        </Tab>
        <Tab eventKey="privacy" title="Privacy Policy">
          <TabsInside />
        </Tab>
        <Tab eventKey="terms" title="Terms & Conditions">
          <TabsInside />
        </Tab>
      </Tabs>
      {/* About tabs end */}
    </div>
  );
}

export default About;
