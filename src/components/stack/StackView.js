import React, { Component } from "react";
import axios from "axios";
import Constant from "../../global/Constant.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ModalSuccess from "../../layouts/modal/ModalSuccess";
import ModalFailed from "../../layouts/modal/ModalFailed";

class StackView extends Component {
  state = {
    stakeInfo: {
      numImage: 0,
      numImageAvailable: 4,
      staked: false,
      stakedDays: 0,
    },

    modalSuccessForm: {
      modalShow: false,
    },

    modalFailedForm: {
      modalShow: false,
      errMsg: "",
    },
  };

  componentDidMount() {
    // this.apiConnectWallet();
  }

  render() {
    return (
      <div>
        <ModalSuccess
          modalSuccessForm={this.state.modalSuccessForm}
          dynamicSetForm={this.dynamicSetForm}
        />

        <ModalFailed
          modalFailedForm={this.state.modalFailedForm}
          dynamicSetForm={this.dynamicSetForm}
        />
        
        <Container fluid className="bg-orange row-height-100vh">
          {/* <Row className=""> */}
            {/* <Row className="d-flex align-items-center justify-content-center"> */}
          <br/>
          <br/>
          <br/>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              {/* {this.layoutPagination()} */}
              <Col sm={4} lg={2} className="m-2 p-2 bg-none border-2-black border-radius-10">

                <Col 
                  className="height-20vh d-flex align-items-center justify-content-center"
                  onClick={() => this.setStakeInfo("numImage", this.state.stakeInfo.numImage + 1)}
                >
                  <img
                    height={150}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/candy.png"
                    }
                  />
                  <h5>x{this.state.stakeInfo.numImage}</h5>
                </Col>
                
              </Col>
              <Col sm={4} lg={2} className="m-2 p-2 bg-none border-2-black border-radius-10">
                <Col className="height-20vh d-flex align-items-center justify-content-center">
                  <span>+</span>
                </Col>
              </Col>
              
            </Col>
          </Row>          
          <br/>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
            {(this.state.stakeInfo.staked) ? 
              <Button
                className=""
                variant="secondary"
                size="lg"
                onClick={() => this.actionMintZombie()}
              >
              Mint Zombie Birds
              </Button> : 
              <Button
                className=""
                variant="secondary"
                size="lg"
                onClick={() => this.actionStack()}
              >
              Stack
              </Button>}
              
            </Col>
          </Row>
          <br/>
          <Row>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                {(this.state.stakeInfo.staked) ? 
                <h5 className="font-weight-bold"
                  onClick={() => this.setStakeInfo("stakedDays", this.state.stakeInfo.stakedDays + 10)}>
                  Days Staked : {this.state.stakeInfo.stakedDays}
                </h5> : 
                <h5 className="font-weight-bold">
                  Candies Available : {this.state.stakeInfo.numImageAvailable}
                </h5>}
                
              </Col>
          </Row>
          {/* </Row> */}
        </Container>
      </div>
    );
  }

  // Layout function

  // Layout function end

  // API function
  apiConnectWallet = async () => {
    return await window.ethereum.request({ method: 'eth_requestAccounts'});
  };
  
  // API function end

  setStakeInfo = (type, value) => {
    console.log("setStakeInfo");
    console.log("type: " + type);
    console.log("value: " + value);

    switch(type) {
      case "numImage": {
        value = (value < 4) ? value : this.state.stakeInfo.numImageAvailable;
      };
      break;
    }

    this.setState(
      {
        stakeInfo: {
          ...this.state.stakeInfo,
          [type]: value,
        },
      },

      console.log(
        "stakeInfo: " + JSON.stringify(this.state.stakeInfo)
      )
    );
  };

  dynamicSetForm = (formObject, type, value) => {
    console.log("dynamicSetForm");
    console.log("type: " + type);

    this.setState(
      {
        [formObject]: {
          ...this.state[formObject],
          [type]: value,
        },
      },
      () => {
        console.log(
          "dynamicSetForm: " + formObject + " " + JSON.stringify(this.state[formObject])
        );
      }
    );
  };

  actionStack = () => {
    let stackInfo = this.state.stakeInfo;

    if (stackInfo.numImage < 4) {
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Insufficient Candies to be staked. 4 candies are required in order to stake."
        }
      })
    } else {
      this.setState({
        modalSuccessForm: {
          ...this.state.modalSuccessForm,
          modalShow: true,
          successMsg: "Successfully staked Candies"
        },
        stakeInfo: {
          ...this.state.stakeInfo,
          staked: true,
        },
        
      })
      // this.setStakeInfo("staked", true);
    }
  }

  actionMintZombie = () => {
    let stackInfo = this.state.stakeInfo;

    if (stackInfo.stakedDays < 30) {
      this.setState({
        modalFailedForm: {
          ...this.state.modalFailedForm,
          modalShow: true,
          errMsg: "Candies need to be staked for 30 days."
        }
      })
    } else {
      // this.setState({
      //   modalSuccessForm: {
      //     ...this.state.modalSuccessForm,
      //     modalShow: true,
      //     successMsg: "Successfully staked Candies"
      //   },
      //   stakeInfo: {
      //     ...this.state.stakeInfo,
      //     staked: true,
      //   },
        
      // })
    }
  }
}

export default StackView;
