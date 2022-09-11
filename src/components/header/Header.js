import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    walletAddress: "",
  }

  componentDidMount() {
    // this.apiConnectWallet();
  }

  render() {
    return (
      <div className="">
        <Navbar collapseOnSelect expand="lg" className="navbar-bg-orange navbar-height" >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <h3>Spooky Birds</h3>
            </Navbar.Brand>
            
            <Form className="">
              {this.state.walletAddress == "" ? 
              <Button
                className=""
                variant="secondary"
                size="sm"
                onClick={() => this.apiConnectWallet()}
              >
              Login
              </Button>: 
              <Badge className="badge-bg-gray-8 font-size-1">
                {this.state.walletAddress}
              </Badge>}
              
            </Form>
          </Container>
        </Navbar>
      </div>
    );
  }

  // API function
  apiConnectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      let response = await window.ethereum.request(
        { 
          method: 'eth_requestAccounts'
        }
      ).then(res => {
        let walletAddress = res[0];
        console.log("res: " + JSON.stringify(res));
        this.setState({ walletAddress:walletAddress })
      });
    } else {
      window.open('https://metamask.io/')
    }
  };

  // aaa = async = () => {
  //   // ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);
  // }
  
  // API function end
}

export default Header;
