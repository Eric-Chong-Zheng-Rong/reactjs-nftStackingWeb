import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

class Header extends Component {
  
  render() {
    return (
      <div className="">
        <Navbar collapseOnSelect expand="lg" className="navbar-bg-orange navbar-height" >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <h3>Spooky Birds</h3>
            </Navbar.Brand>
            
            <Form className="">            
              <Badge className="badge-bg-gray-8 font-size-1">0x32r2……23gd</Badge>
            </Form>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
